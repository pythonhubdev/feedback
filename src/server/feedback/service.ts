import { Effect } from "effect";
import { Status, type TDataResponseSchema } from "~/core/schema/common.ts";
import FeedbackEffect from "~/server/feedback/effect.ts";
import type { TFeedbackSchema } from "~/server/feedback/schema.ts";

export default abstract class FeedbackService {
	static async create(body: TFeedbackSchema): Promise<TDataResponseSchema> {
		Effect.runSync(
			Effect.logInfo("FeedbackService: Received create request").pipe(
				Effect.annotateLogs("service", "FeedbackService"),
				Effect.annotateLogs("operation", "create"),
			),
		);

		const program = FeedbackEffect.createFeedbackEffect(body).pipe(
			Effect.map(FeedbackEffect.toApiResponse),
			Effect.tap(() =>
				Effect.logInfo(
					"FeedbackService: Successfully created feedback",
				).pipe(Effect.annotateLogs("service", "FeedbackService")),
			),
			Effect.catchAll((error) => {
				Effect.runSync(
					Effect.logError(
						"FeedbackService: Error caught in service layer",
					).pipe(
						Effect.annotateLogs("service", "FeedbackService"),
						Effect.annotateLogs("errorTag", error._tag),
						Effect.annotateLogs("errorMessage", error.message),
					),
				);

				return Effect.succeed(
					error._tag === "DuplicateError"
						? {
								status: Status.Error,
								message: error.message,
								data: undefined,
							}
						: {
								status: Status.Error,
								message: error.message,
								data: undefined,
							},
				);
			}),
		);

		return Effect.runPromise(program);
	}
}
