import {
	date,
	integer,
	pgTable,
	primaryKey,
	varchar,
} from "drizzle-orm/pg-core";

export const feedbackTable = pgTable(
	"feedback",
	{
		id: integer().primaryKey().generatedAlwaysAsIdentity(),
		name: varchar({ length: 255 }).notNull(),
		email: varchar({ length: 255 }).notNull(),
		year: integer().notNull().default(2025),
		batch: integer().notNull(),
		workedWell: varchar({ length: 1000 }).notNull(),
		improve: varchar({ length: 1000 }).notNull(),
		rating: integer().notNull(),
		sessionType: varchar({ length: 255 }).notNull().default("LECTURE"),
		sessionName: varchar({ length: 255 })
			.notNull()
			.default("GIT_LINKEDIN_BASE"),
		sessionDate: date().notNull().default("2025-10-14"),
	},
	(table) => [
		primaryKey({
			name: "email_date_constraint",
			columns: [table.email, table.sessionDate],
		}),
	],
);
