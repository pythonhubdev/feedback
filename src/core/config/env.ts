import { createEnv } from "@t3-oss/env-core";
import * as v from "valibot";

export const env = createEnv({
	server: {
		SERVER_URL: v.pipe(v.string("Server URL must be a string"), v.url()),
	},

	clientPrefix: "FEEDBACK_",

	client: {
		FEEDBACK_APP_TITLE: v.string("App title must be a string"),
		FEEDBACK_APP_DESCRIPTION: v.string("App description must be a string"),
		FEEDBACK_APP_URL: v.pipe(
			v.string("App URL must be a string"),
			v.url("App URL must be a valid URL"),
		),
		FEEDBACK_API_URL: v.pipe(
			v.string("API URL must be a string"),
			v.url("API URL must be a valid URL"),
		),
	},
	runtimeEnvStrict: {
		SERVER_URL: process.env.SERVER_URL,
		FEEDBACK_APP_TITLE: process.env.FEEDBACK_APP_TITLE,
		FEEDBACK_APP_DESCRIPTION: process.env.FEEDBACK_APP_DESCRIPTION,
		FEEDBACK_APP_URL: process.env.FEEDBACK_APP_URL,
		FEEDBACK_API_URL: process.env.FEEDBACK_API_URL,
	},
	emptyStringAsUndefined: true,
});
