import { integer, pgEnum, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const careerResultEnum = pgEnum("careerResult", [
	"FRONTEND",
	"BACKEND",
	"DESIGN",
	"FULLSTACK",
]);

export const careerTable = pgTable("career", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull().unique(),
	year: integer().notNull().default(2025),
	batch: integer().notNull(),
	department: varchar({ length: 100 }).notNull(),
	reasonToChooseTech: text().notNull(),
	otherInterests: text().notNull(),
	result: careerResultEnum().notNull(),
	createdAt: text().notNull().default("2025-01-01"),
});
