import { Status, type TResponseSchema } from "~/core/schema/common.ts";

export abstract class RootService {
	static async root(): Promise<TResponseSchema> {
		return {
			status: Status.Success,
			message: "Welcome to Mentorship.01 API! Elysia is running!",
		};
	}
}
