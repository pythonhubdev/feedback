import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./src/core/models",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.SUPABASE_URL || "",
	},
});
