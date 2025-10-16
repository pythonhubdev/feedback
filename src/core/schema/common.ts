import * as v from "valibot";

enum Status {
	Success = "SUCCESS",
	Error = "ERROR",
	Failure = "FAILURE",
}

const ResponseSchema = v.object({
	status: v.enum(Status, "Status must be 'success' or 'error'"),
	message: v.string("Message must be a string"),
});

const DataResponseSchema = v.object({
	...ResponseSchema.entries,
	data: v.optional(v.record(v.string(), v.unknown())),
});

type TResponseSchema = v.InferOutput<typeof ResponseSchema>;
type TDataResponseSchema = v.InferOutput<typeof DataResponseSchema>;

export {
	ResponseSchema,
	DataResponseSchema,
	Status,
	type TResponseSchema,
	type TDataResponseSchema,
};
