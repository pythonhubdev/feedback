import { Elysia } from "elysia";
import type { TResponseSchema } from "~/core/schema/common";
import { ResponseSchema } from "~/core/schema/common";

/**
 * Root service for the feedback API
 * Provides basic health check and welcome endpoint
 */
export const rootService = new Elysia({
	detail: {
		tags: ["Root"],
		summary: "Get welcome message",
		description: "Returns a welcome message confirming the API is running",
	},
}).get(
	"/",
	() => {
		const response: TResponseSchema = {
			status: "success",
			message: "Welcome to feedback API! Elysia is running!",
		};
		return response;
	},
	{
		response: ResponseSchema,
	},
);

export default rootService;
