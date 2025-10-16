import * as v from "valibot";

enum SessionTypes {
	Workshop = "WORKSHOP",
	Lecture = "LECTURE",
	HandsOn = "HANDS_ON",
	MockInterview = "MOCK_INTERVIEW",
}

enum SessionName {
	GitLinkedInBase = "GIT_LINKEDIN_BASE",
}

const FeedbackSchema = v.object({
	name: v.string("Name must be a string"),
	email: v.pipe(
		v.string(),
		v.nonEmpty("Please enter your email."),
		v.email("The email is badly formatted."),
		v.maxLength(30, "Your email is too long."),
	),
	year: v.pipe(v.number(), v.minValue(2025, "Year must be at least 2025")),
	batch: v.pipe(v.number(), v.minValue(1, "Batch must be at least 1")),
	workedWell: v.pipe(
		v.string("Worked well must be a string"),
		v.maxLength(1000, "Your feedback is too long."),
	),

	improve: v.pipe(
		v.string("Improve must be a string"),
		v.maxLength(1000, "Your feedback is too long."),
	),
	rating: v.pipe(
		v.number("Rating must be a number"),
		v.minValue(1, "Rating must be at least 1"),
		v.maxValue(5, "Rating must be at most 5"),
	),
	sessionType: v.enum(
		SessionTypes,
		"Session type must be one of the predefined types",
	),
	sessionName: v.enum(
		SessionName,
		"Session name must be one of the predefined names",
	),
	sessionDate: v.string("Session date must be a string"),
});

const FeedbackResponseSchema = v.object({
	id: v.number("ID must be a number"),
	...FeedbackSchema.entries,
});

type TFeedbackSchema = v.InferInput<typeof FeedbackSchema>;
type TFeedbackResponseSchema = v.InferOutput<typeof FeedbackResponseSchema>;

export {
	FeedbackSchema,
	type TFeedbackSchema,
	type TFeedbackResponseSchema,
	SessionName,
	SessionTypes,
};
