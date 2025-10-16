import { Effect, Logger, LogLevel } from "effect";

// Create a custom logger that formats logs nicely
const customLogger = Logger.make(({ logLevel, message, cause, spans }) => {
	const timestamp = new Date().toISOString();
	const level = logLevel.label.toUpperCase();

	// Convert spans List to array for processing
	const spanArray = Array.from(spans);
	const spanInfo =
		spanArray.length > 0
			? ` [${spanArray.map((s) => s.label).join(" > ")}]`
			: "";

	const logMessage = `[${timestamp}] ${level}${spanInfo}: ${message}`;

	// In production, you might want to send these to a logging service
	if (logLevel._tag === "Fatal" || logLevel._tag === "Error") {
		// biome-ignore lint/suspicious/noConsole: logging is the primary purpose here
		console.error(logMessage);
		if (cause) {
			// biome-ignore lint/suspicious/noConsole: logging is the primary purpose here
			console.error("Cause:", cause);
		}
	} else if (logLevel._tag === "Warning") {
		// biome-ignore lint/suspicious/noConsole: logging is the primary purpose here
		console.warn(logMessage);
	} else {
		// biome-ignore lint/suspicious/noConsole: logging is the primary purpose here
		console.log(logMessage);
	}
});

// Configure the default log level based on environment
const logLevel =
	process.env.NODE_ENV === "production" ? LogLevel.Info : LogLevel.Debug;

// Export the logger layer that can be provided to Effects
export const LoggerLive = Logger.replace(Logger.defaultLogger, customLogger);

// Helper to log with annotations
export const logInfo = (
	message: string,
	annotations?: Record<string, string>,
) => {
	let effect = Effect.logInfo(message);
	if (annotations) {
		for (const [key, value] of Object.entries(annotations)) {
			effect = effect.pipe(Effect.annotateLogs(key, value));
		}
	}
	return effect;
};

export const logError = (
	message: string,
	annotations?: Record<string, string>,
) => {
	let effect = Effect.logError(message);
	if (annotations) {
		for (const [key, value] of Object.entries(annotations)) {
			effect = effect.pipe(Effect.annotateLogs(key, value));
		}
	}
	return effect;
};

export const logWarning = (
	message: string,
	annotations?: Record<string, string>,
) => {
	let effect = Effect.logWarning(message);
	if (annotations) {
		for (const [key, value] of Object.entries(annotations)) {
			effect = effect.pipe(Effect.annotateLogs(key, value));
		}
	}
	return effect;
};

export const logDebug = (
	message: string,
	annotations?: Record<string, string>,
) => {
	let effect = Effect.logDebug(message);
	if (annotations) {
		for (const [key, value] of Object.entries(annotations)) {
			effect = effect.pipe(Effect.annotateLogs(key, value));
		}
	}
	return effect;
};
