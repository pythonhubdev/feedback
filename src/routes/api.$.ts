import cors from "@elysiajs/cors";
import { treaty } from "@elysiajs/eden";
import openapi, { fromTypes } from "@elysiajs/openapi";
import serverTiming from "@elysiajs/server-timing";
import { createFileRoute } from "@tanstack/solid-router";
import { createIsomorphicFn } from "@tanstack/solid-start";
import { toJsonSchema } from "@valibot/to-json-schema";
import { Elysia } from "elysia";
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
	name: "Mentorship.01",
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
					title: "Mentorship.01",
					description:
						"Mentorship.01: A mentorship application for mentoring people, collecting feedback after each session, and providing guidance, extensible to handle future session types.",
					version: "0.0.1",
				},
				servers: [
					{
						url: "http://localhost:3000/api",
						description: "Development server",
					},
					{
						url: "https://mentorship01.crazzle.dev/api",
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
	)
	// Register all services in the chain
	.use(rootService)
	.use(feedbackService)
	.use(careerService);

// Export the app type for Eden Treaty
export type App = typeof app;

const handle = async ({ request }: { request: Request }) => {
	try {
		return await app.fetch(request);
	} catch (_error) {
		console.log("API handler error:", _error);
		return new Response(
			JSON.stringify({
				status: "error",
				message: "Internal server error",
			}),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}
};

export const Route = createFileRoute("/api/$")({
	server: {
		handlers: {
			GET: handle,
			POST: handle,
			PUT: handle,
			DELETE: handle,
			PATCH: handle,
			OPTIONS: handle,
		},
	},
});

export const api = createIsomorphicFn()
	.server(() => treaty(app).api)
	.client(() => treaty<App>("http://localhost:3000").api);
