import { Effect } from "effect";
import { Status, type TDataResponseSchema } from "~/core/schema/common.ts";
import CareerEffect from "~/server/career/effect.ts";
import type { TCareerSchema } from "~/server/career/schema.ts";

export default abstract class CareerService {
	static async create(body: TCareerSchema): Promise<TDataResponseSchema> {
		const program = CareerEffect.createCareerEffect(body).pipe(
			Effect.map(CareerEffect.toApiResponse),
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
