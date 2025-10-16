import {
	date,
	integer,
	pgEnum,
	pgTable,
	unique,
	varchar,
} from "drizzle-orm/pg-core";

const sessionTypeEnum = pgEnum("sessionType", [
	"WORKSHOP",
	"LECTURE",
	"HANDS_ON",
	"MOCK_INTERVIEW",
]);

const sessionNameEnum = pgEnum("sessionName", ["GIT_LINKEDIN_BASE"]);

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
		sessionType: sessionTypeEnum().default("LECTURE"),
		sessionName: sessionNameEnum().notNull().default("GIT_LINKEDIN_BASE"),
		sessionDate: date().notNull().default("2025-10-14"),
	},
	(table) => [unique("email_date_unique").on(table.email, table.sessionDate)],
);
