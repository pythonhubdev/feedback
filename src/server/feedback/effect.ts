import { Effect } from "effect";
import {
	DatabaseError,
	DuplicateFeedbackError,
} from "~/core/errors/databaseErrors.ts";
import { Status, type TDataResponseSchema } from "~/core/schema/common.ts";
import { database, feedbackTable } from "~/integrations/supabase/supabase.ts";
import type {
	TFeedbackResponseSchema,
	TFeedbackSchema,
} from "~/server/feedback/schema.ts";

export default abstract class FeedbackEffect {
	static createFeedbackEffect = (body: TFeedbackSchema) =>
		Effect.tryPromise({
			try: () =>
				database
					.insert(feedbackTable)
					.values({
						...body,
						sessionDate:
							new Date(body.sessionDate)
								.toISOString()
								.split("T")[0] ||
							new Date().toISOString().split("T")[0],
					})
					.returning() as Promise<TFeedbackResponseSchema[]>,
			catch: (error) =>
				error instanceof Error &&
				(error.message.includes("unique") ||
					// @ts-expect-error - accessing drizzle error structure
					error.cause?.constraint_name?.includes("unique"))
					? new DuplicateFeedbackError(
							"A feedback with this email for this session date already exists.",
						)
					: new DatabaseError(
							"Failed to create feedback. Please try again later.",
							error,
						),
		}) as Effect.Effect<
			TFeedbackResponseSchema[],
			DatabaseError | DuplicateFeedbackError,
			never
		>;

	// Transform the Effect result to our API response format
	static toApiResponse = (
		result: TFeedbackResponseSchema[],
	): TDataResponseSchema => {
		const feedback = result[0];
		return {
			status: Status.Success,
			message: "Feedback created successfully!",
			data: feedback
				? {
						...feedback,
						// Ensure sessionDate is consistently formatted as a string for API response
						sessionDate: new Date(feedback.sessionDate)
							.toISOString()
							.split("T")[0],
					}
				: {},
		};
	};
}
