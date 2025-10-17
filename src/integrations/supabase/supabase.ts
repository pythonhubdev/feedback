import { drizzle } from "drizzle-orm/postgres-js";
import { Effect } from "effect";
import postgres from "postgres";
import { feedbackTable } from "~/core/models/feedback.ts";

const connectionString = process.env.SUPABASE_URL || "";

Effect.log(`Supabase Connection String: ${connectionString}`);

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });
export const database = drizzle(client);
export { feedbackTable };
