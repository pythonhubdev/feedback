import { Elysia } from "elysia";
import { DataResponseSchema } from "~/core/schema/common.ts";
import { CareerSchema } from "~/server/career/schema.ts";
import CareerService from "~/server/career/service.ts";

export const careerService = new Elysia({
	prefix: "/career",
	tags: ["Career"],
}).post("", ({ body }) => CareerService.create(body), {
	body: CareerSchema,
	response: DataResponseSchema,
	detail: {
		summary: "Create career submission",
		description:
			"Submit career information to help determine the best career path.",
	},
});
