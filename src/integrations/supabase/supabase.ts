import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { feedbackTable } from "~/core/models/feedback.ts";

export const client = postgres({ prepare: false });
export const database = drizzle(client);
export { feedbackTable };
