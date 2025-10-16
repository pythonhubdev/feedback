import { Effect } from "effect";
import { Status, type TDataResponseSchema } from "~/core/schema/common.ts";
import FeedbackEffect from "~/server/feedback/effect.ts";
import type { TFeedbackSchema } from "~/server/feedback/schema.ts";

export default abstract class FeedbackService {
	static async create(body: TFeedbackSchema): Promise<TDataResponseSchema> {
		const program = FeedbackEffect.createFeedbackEffect(body).pipe(
			Effect.map(FeedbackEffect.toApiResponse),
			Effect.catchAll((error) =>
				Effect.succeed(
					error._tag === "DuplicateFeedbackError"
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
				),
			),
		);

		return Effect.runPromise(program);
	}
}
