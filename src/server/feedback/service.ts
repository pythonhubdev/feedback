import { Status, type TDataResponseSchema } from "~/core/schema/common.ts";
import { database, feedbackTable } from "~/integrations/supabase/supabase.ts";
import type { TFeedbackRequestSchema } from "~/server/feedback/schema.ts";

export default abstract class FeedbackService {
	static async create(
		body: TFeedbackRequestSchema,
	): Promise<TDataResponseSchema> {
		try {
			const result = await database
				.insert(feedbackTable)
				.values({
					name: body.name,
					email: body.email,
					year: body.year,
					batch: body.batch,
					workedWell: body.workedWell,
					improve: body.improve,
					rating: body.rating,
					sessionType: body.sessionType,
					sessionName: body.sessionName,
					sessionDate:
						new Date(body.sessionDate)
							.toISOString()
							.split("T")[0] ||
						new Date().toISOString().split("T")[0],
				})
				.returning();
			return {
				status: Status.Success,
				message: "Feedback created successfully!",
				data: result[0],
			};
		} catch (error) {
			console.log("Error creating feedback:", error.cause);
			if (
				error instanceof Error &&
				error.cause.constraint_name.includes("unique")
			) {
				return {
					status: Status.Error,
					message: "A feedback with this email already exists.",
					data: null,
				};
			}

			return {
				status: Status.Error,
				message: "Failed to create feedback. Please try again later.",
				data: null,
			};
		}
	}
}
