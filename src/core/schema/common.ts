import * as v from "valibot";

const ResponseSchema = v.object({
	status: v.union(
		[v.literal("success"), v.literal("error")],
		"Status must be 'success' or 'error'",
	),
	message: v.string("Message must be a string"),
});

type TResponseSchema = v.InferOutput<typeof ResponseSchema>;

export { ResponseSchema, type TResponseSchema };
