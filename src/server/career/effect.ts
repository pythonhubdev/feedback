import { Effect } from "effect";
import {
	DatabaseError,
	DuplicateFeedbackError,
} from "~/core/errors/databaseErrors.ts";
import { careerTable } from "~/core/models/career.ts";
import { Status } from "~/core/schema/common.ts";
import { database } from "~/integrations/supabase/supabase.ts";
import type {
	TCareerResponseSchema,
	TCareerSchema,
} from "~/server/career/schema.ts";

export default abstract class CareerEffect {
	static createCareerEffect = (body: TCareerSchema) =>
		Effect.tryPromise({
			try: () =>
				database
					.insert(careerTable)
					.values({
						...body,
						createdAt: new Date().toISOString().split("T")[0],
					})
					.returning() as Promise<TCareerResponseSchema[]>,
			catch: (error) =>
				error instanceof Error &&
				(error.message.includes("unique") ||
					// @ts-expect-error - accessing drizzle error structure
					error.cause?.constraint_name?.includes("unique"))
					? new DuplicateFeedbackError(
							"A career submission with this email already exists.",
						)
					: new DatabaseError(
							"Failed to create career submission. Please try again later.",
							error,
						),
		}) as Effect.Effect<
			TCareerResponseSchema[],
			DatabaseError | DuplicateFeedbackError,
			never
		>;

	// Transform the Effect result to our API response format
	static toApiResponse = (
		result: TCareerResponseSchema[],
	): { status: Status; message: string; data?: any } => {
		const career = result[0];
		return {
			status: Status.Success,
			message: "Career submission created successfully!",
			data: career || {},
		};
	};
}
