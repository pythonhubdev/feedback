import { Elysia } from "elysia";
import { ResponseSchema } from "~/core/schema/common";
import { RootService } from "~/server/root/service.ts";

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
}).get("/", () => RootService.root(), {
	response: ResponseSchema,
});

export default rootService;
