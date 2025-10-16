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

class DuplicateError extends Error {
	readonly _tag = "DuplicateError";
	constructor(message: string) {
		super(message);
		this.name = "DuplicateError";
	}
}

export { DatabaseError, DuplicateError };
