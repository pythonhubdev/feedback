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

const _dataResponseSchema = v.object({
	data: v.nullable(v.object({})),
});

const DataResponseSchema = v.object({
	...ResponseSchema.entries,
	..._dataResponseSchema.entries,
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
