import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "~/core/config/env.ts";
import { feedbackTable } from "~/core/models/feedback.ts";

const connectionString = env.SUPABASE_URL;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });
export const database = drizzle(client);
export { feedbackTable };
