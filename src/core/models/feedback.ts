import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const feedbackTable = pgTable("feedback", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull().unique(),
	workedWell: varchar({ length: 1000 }).notNull(),
	improve: varchar({ length: 1000 }).notNull(),
	rating: integer().notNull(),
});
