import { Effect } from "effect";
import { DatabaseError, DuplicateError } from "~/core/errors/databaseErrors.ts";
import { feedbackTable } from "~/core/models/feedback.ts";
import { Status, type TDataResponseSchema } from "~/core/schema/common.ts";
import { database } from "~/integrations/supabase/supabase.ts";
import type {
	TFeedbackResponseSchema,
	TFeedbackSchema,
} from "~/server/feedback/schema.ts";
import {
	logDebug,
	logError,
	logInfo,
	logWarning,
} from "~/server/logger/service.ts";

export default abstract class FeedbackEffect {
	static createFeedbackEffect = (body: TFeedbackSchema) =>
		Effect.gen(function* () {
			yield* logInfo("Starting feedback creation", {
				email: body.email,
				name: body.name,
				sessionDate: body.sessionDate,
			});

			const formattedDate =
				new Date(body.sessionDate).toISOString().split("T")[0] ||
				new Date().toISOString().split("T")[0];

			yield* logDebug("Inserting feedback data into database", {
				formattedSessionDate: formattedDate,
			});

			return yield* Effect.tryPromise({
				try: () =>
					database
						.insert(feedbackTable)
						.values({
							...body,
							sessionDate: formattedDate,
						})
						.returning() as Promise<TFeedbackResponseSchema[]>,
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
							logWarning("Duplicate feedback detected", {
								email: body.email,
								sessionDate: body.sessionDate,
							}),
						);
						return new DuplicateError(
							"A feedback with this email for this session date already exists.",
						);
					}

					Effect.runSync(
						logError("Unexpected database error", {
							email: body.email,
							sessionDate: body.sessionDate,
							rawError: JSON.stringify(
								error,
								Object.getOwnPropertyNames(error),
							),
						}),
					);

					return new DatabaseError(
						"Failed to create feedback. Please try again later.",
						error,
					);
				},
			}).pipe(
				Effect.tap((data) =>
					logInfo("Feedback inserted successfully", {
						recordId: String(data[0]?.id || "unknown"),
						recordCount: String(data.length),
					}),
				),
			);
		}) as Effect.Effect<
			TFeedbackResponseSchema[],
			DatabaseError | DuplicateError,
			never
		>;

	// Transform the Effect result to our API response format
	static toApiResponse = (
		result: TFeedbackResponseSchema[],
	): TDataResponseSchema => {
		const feedback = result[0];
		Effect.runSync(
			logInfo("Feedback response prepared", {
				hasData: String(!!feedback),
				recordId: String(feedback?.id || "none"),
			}),
		);

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
