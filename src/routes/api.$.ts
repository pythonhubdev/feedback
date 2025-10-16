import cors from "@elysiajs/cors";
import { treaty } from "@elysiajs/eden";
import openapi, { fromTypes } from "@elysiajs/openapi";
import serverTiming from "@elysiajs/server-timing";
import { createFileRoute } from "@tanstack/solid-router";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { toJsonSchema } from "@valibot/to-json-schema";
import { Elysia } from "elysia";
import { env } from "~/core/config/env.ts";
import {
	ResponseSchema,
	Status,
	type TResponseSchema,
} from "~/core/schema/common";
import { careerService } from "~/server/career";
import { feedbackService } from "~/server/feedback";
import rootService from "~/server/root";

const app = new Elysia({
	prefix: "/api",
	aot: true,
	name: env.FEEDBACK_APP_TITLE,
	analytic: true,
	sucrose: {},
})
	.use(
		cors({
			origin: true,
			methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
			allowedHeaders: ["Content-Type", "Authorization"],
			credentials: true,
		}),
	)
	.use(serverTiming())
	.use(
		openapi({
			documentation: {
				info: {
					title: env.FEEDBACK_APP_TITLE,
					description: env.FEEDBACK_APP_DESCRIPTION,
					version: "0.0.1",
				},
				servers: [
					{
						url: env.SERVER_URL,
						description: "Development server",
					},
					{
						url: "https://feedback.crazzle.dev/api",
						description: "Production server",
					},
				],
			},
			mapJsonSchema: {
				valibot: toJsonSchema,
			},
			references: fromTypes(
				process.env.NODE_ENV === "production"
					? "dist/index.d.ts"
					: "src/routes/api.$.ts",
			),
		}),
	)
	.get(
		"/health",
		() => {
			const response: TResponseSchema = {
				status: Status.Success,
				message: "Service is healthy",
			};
			return response;
		},
		{
			response: ResponseSchema,
			detail: {
				tags: ["Health"],
				summary: "Check service health",
				description: "Returns the health status of the API service",
			},
		},
	);

// Register all services
app.use(rootService);
app.use(feedbackService);
app.use(careerService);

const handle = ({ request }: { request: Request }) => app.fetch(request);

export const Route = createFileRoute("/api/$")({
	server: {
		handlers: {
			GET: handle,
			POST: handle,
			PUT: handle,
			DELETE: handle,
			PATCH: handle,
		},
	},
});

export const api = createIsomorphicFn()
	.server(() => treaty(app).api)
	.client(() => treaty<typeof app>(env.FEEDBACK_APP_URL).api);
