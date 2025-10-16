import * as v from "valibot";

enum CareerResult {
	Frontend = "FRONTEND",
	Backend = "BACKEND",
	Design = "DESIGN",
	Fullstack = "FULLSTACK",
}

const CareerSchema = v.object({
	name: v.string("Name must be a string"),
	email: v.pipe(
		v.string(),
		v.nonEmpty("Please enter your email."),
		v.email("The email is badly formatted."),
		v.maxLength(100, "Your email is too long."),
	),
	year: v.pipe(v.number(), v.minValue(2025, "Year must be at least 2025")),
	batch: v.pipe(v.number(), v.minValue(2025, "Batch must be at least 2025")),
	department: v.pipe(
		v.string("Department must be a string"),
		v.maxLength(100, "Department name is too long."),
	),
	reasonToChooseTech: v.pipe(
		v.string("Reason to choose tech must be a string"),
		v.maxLength(2000, "Reason is too long."),
	),
	otherInterests: v.pipe(
		v.string("Other interests must be a string"),
		v.maxLength(2000, "Other interests description is too long."),
	),
	result: v.enum(
		CareerResult,
		"Result must be one of the predefined options",
	),
});

const CareerResponseSchema = v.object({
	id: v.number("ID must be a number"),
	...CareerSchema.entries,
});

type TCareerSchema = v.InferInput<typeof CareerSchema>;
type TCareerResponseSchema = v.InferOutput<typeof CareerResponseSchema>;

export {
	CareerSchema,
	type TCareerSchema,
	type TCareerResponseSchema,
	CareerResult,
};
