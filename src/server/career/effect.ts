import { Effect } from "effect";
import { DatabaseError, DuplicateError } from "~/core/errors/databaseErrors.ts";
import { careerTable } from "~/core/models/career.ts";
import { Status, type TDataResponseSchema } from "~/core/schema/common.ts";
import { database } from "~/integrations/supabase/supabase.ts";
import type {
	TCareerResponseSchema,
	TCareerSchema,
} from "~/server/career/schema.ts";
import {
	logDebug,
	logError,
	logInfo,
	logWarning,
} from "~/server/logger/service.ts";

export default abstract class CareerEffect {
	static createCareerEffect = (body: TCareerSchema) =>
		Effect.gen(function* () {
			yield* logInfo("Starting career submission creation", {
				email: body.email,
				name: body.name,
			});

			yield* logDebug("Inserting career data into database");

			return yield* Effect.tryPromise({
				try: () =>
					database
						.insert(careerTable)
						.values({
							...body,
							createdAt: new Date().toISOString().split("T")[0],
						})
						.returning() as Promise<TCareerResponseSchema[]>,
				catch: (error) => {
					Effect.runSync(
						logError("Database operation failed", {
							errorType:
								error instanceof Error
									? error.constructor.name
									: "Unknown",
							errorMessage:
								error instanceof Error
									? error.message
									: String(error),
							errorStack:
								error instanceof Error
									? error.stack || "no stack"
									: "N/A",
						}),
					);

					if (
						error instanceof Error &&
						(error.message.includes("unique") ||
							// @ts-expect-error - accessing drizzle error structure
							error.cause?.constraint_name?.includes("unique"))
					) {
						Effect.runSync(
							logWarning("Duplicate career submission detected", {
								email: body.email,
							}),
						);
						return new DuplicateError(
							"A career submission with this email already exists.",
						);
					}

					Effect.runSync(
						logError("Unexpected database error", {
							email: body.email,
							rawError: JSON.stringify(
								error,
								Object.getOwnPropertyNames(error),
							),
						}),
					);

					return new DatabaseError(
						"Failed to create career submission. Please try again later.",
						error,
					);
				},
			}).pipe(
				Effect.tap((data) =>
					logInfo("Career submission inserted successfully", {
						recordId: String(data[0]?.id || "unknown"),
						recordCount: String(data.length),
					}),
				),
			);
		}) as Effect.Effect<
			TCareerResponseSchema[],
			DatabaseError | DuplicateError,
			never
		>;

	// Transform the Effect result to our API response format
	static toApiResponse = (
		result: TCareerResponseSchema[],
	): TDataResponseSchema => {
		const career = result[0];
		Effect.runSync(
			logInfo("Career submission response prepared", {
				hasData: String(!!career),
				recordId: String(career?.id || "none"),
			}),
		);

		return {
			status: Status.Success,
			message: "Career submission created successfully!",
			data: career || {},
		};
	};
}
