import { createEnv } from "@t3-oss/env-core";
import * as v from "valibot";

export const env = createEnv({
	server: {
		SERVER_URL: v.pipe(v.string("Server URL must be a string"), v.url()),
		SUPABASE_URL: v.pipe(
			v.string("Supabase URL must be a string"),
			v.url(),
		),
		// Server variables should NOT have the clientPrefix
		APP_TITLE: v.optional(
			v.string("App title must be a string"),
			"Mentorship.01",
		),
		APP_DESCRIPTION: v.optional(
			v.string("App description must be a string"),
			"Mentorship application",
		),
		APP_URL: v.optional(
			v.pipe(
				v.string("App URL must be a string"),
				v.url("App URL must be a valid URL"),
			),
			"http://localhost:3000",
		),
		API_URL: v.optional(
			v.pipe(
				v.string("API URL must be a string"),
				v.url("API URL must be a valid URL"),
			),
			"http://localhost:3000",
		),
	},

	clientPrefix: "MENTORSHIP_",

	client: {
		// Client variables MUST have the clientPrefix and are exposed to the browser
		MENTORSHIP_APP_TITLE: v.optional(
			v.string("App title must be a string"),
			"Mentorship.01",
		),
		MENTORSHIP_APP_DESCRIPTION: v.optional(
			v.string("App description must be a string"),
			"Mentorship application",
		),
	},
	runtimeEnvStrict: {
		SERVER_URL: process.env.SERVER_URL,
		SUPABASE_URL: process.env.SUPABASE_URL,
		APP_TITLE: process.env.APP_TITLE,
		APP_DESCRIPTION: process.env.APP_DESCRIPTION,
		APP_URL: process.env.APP_URL,
		API_URL: process.env.API_URL,
		MENTORSHIP_APP_TITLE: process.env.MENTORSHIP_APP_TITLE,
		MENTORSHIP_APP_DESCRIPTION: process.env.MENTORSHIP_APP_DESCRIPTION,
	},
	emptyStringAsUndefined: true,
});
