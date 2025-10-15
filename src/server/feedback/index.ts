import { Elysia } from "elysia";
import { DataResponseSchema } from "~/core/schema/common.ts";
import { FeedbackRequestSchema } from "~/server/feedback/schema.ts";
import FeedbackService from "~/server/feedback/service.ts";

export const feedbackService = new Elysia({
	prefix: "/feedback",
	tags: ["Feedback"],
}).post("", ({ body }) => FeedbackService.create(body), {
	body: FeedbackRequestSchema,
	response: DataResponseSchema,
	detail: {
		summary: "Create feedback",
		description: "Create feedback for a session that was conducted.",
	},
});
