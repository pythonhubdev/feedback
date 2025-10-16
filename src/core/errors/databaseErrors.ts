// Define specific error types for better error handling
class DatabaseError extends Error {
	readonly _tag = "DatabaseError";
	constructor(
		message: string,
		public readonly cause?: unknown,
	) {
		super(message);
		this.name = "DatabaseError";
	}
}

class DuplicateFeedbackError extends Error {
	readonly _tag = "DuplicateFeedbackError";
	constructor(message: string) {
		super(message);
		this.name = "DuplicateFeedbackError";
	}
}

export { DatabaseError, DuplicateFeedbackError };
