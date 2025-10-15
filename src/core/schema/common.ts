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

type TResponseSchema = v.InferOutput<typeof ResponseSchema>;

export { ResponseSchema, Status, type TResponseSchema };
