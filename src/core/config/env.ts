import { createEnv } from "@t3-oss/env-core";
import * as v from "valibot";

export const env = createEnv({
	server: {
		SERVER_URL: v.pipe(v.string("Server URL must be a string"), v.url()),
		SUPABASE_URL: v.pipe(
			v.string("Supabase URL must be a string"),
			v.url(),
		),
	},

	clientPrefix: "MENTORSHIP_",

	client: {
		MENTORSHIP_APP_TITLE: v.string("App title must be a string"),
		MENTORSHIP_APP_DESCRIPTION: v.string(
			"App description must be a string",
		),
		MENTORSHIP_APP_URL: v.pipe(
			v.string("App URL must be a string"),
			v.url("App URL must be a valid URL"),
		),
		MENTORSHIP_API_URL: v.pipe(
			v.string("API URL must be a string"),
			v.url("API URL must be a valid URL"),
		),
	},
	runtimeEnvStrict: {
		SERVER_URL: process.env.SERVER_URL,
		SUPABASE_URL: process.env.SUPABASE_URL,
		MENTORSHIP_APP_TITLE: process.env.MENTORSHIP_APP_TITLE,
		MENTORSHIP_APP_DESCRIPTION: process.env.MENTORSHIP_APP_DESCRIPTION,
		MENTORSHIP_APP_URL: process.env.MENTORSHIP_APP_URL,
		MENTORSHIP_API_URL: process.env.MENTORSHIP_API_URL,
	},
	emptyStringAsUndefined: true,
});
