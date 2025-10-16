import { Effect } from "effect";
import { Status, type TDataResponseSchema } from "~/core/schema/common.ts";
import CareerEffect from "~/server/career/effect.ts";
import type { TCareerSchema } from "~/server/career/schema.ts";

export default abstract class CareerService {
	static async create(body: TCareerSchema): Promise<TDataResponseSchema> {
		Effect.runSync(
			Effect.logInfo("CareerService: Received create request").pipe(
				Effect.annotateLogs("service", "CareerService"),
				Effect.annotateLogs("operation", "create"),
			),
		);

		const program = CareerEffect.createCareerEffect(body).pipe(
			Effect.map(CareerEffect.toApiResponse),
			Effect.tap(() =>
				Effect.logInfo(
					"CareerService: Successfully created career submission",
				).pipe(Effect.annotateLogs("service", "CareerService")),
			),
			Effect.catchAll((error) => {
				Effect.runSync(
					Effect.logError(
						"CareerService: Error caught in service layer",
					).pipe(
						Effect.annotateLogs("service", "CareerService"),
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
