import { useMutation } from "@tanstack/solid-query";
import { toast } from "solid-sonner";
import { api } from "~/routes/api.$.ts";
import type { SessionName, SessionTypes } from "~/server/feedback/schema.ts";

interface FeedbackSubmissionData {
	name: string;
	email: string;
	year: number;
	batch: number;
	department: string;
	workedWell: string;
	improve: string;
	rating: number;
	sessionType: SessionTypes;
	sessionName: SessionName;
	sessionDate: string;
}

export const useFeedbackSubmission = () => {
	const mutation = useMutation(() => ({
		mutationKey: ["feedback submission"],
		mutationFn: async (data: FeedbackSubmissionData) => {
			const response = await api.feedback.post(data);

			if (!response.data) {
				throw new Error(
					response.message || "Failed to submit feedback",
				);
			}

			return response.data;
		},
		onSuccess: () => {
			toast.success(
				"Feedback submitted successfully! Thank you for your response.",
			);
		},
		onError: (error: Error) => {
			toast.error(
				error.message || "Failed to submit feedback. Please try again.",
			);
		},
	}));

	return {
		submitFeedback: mutation.mutateAsync,
		isSubmitting: mutation.isPending,
		error: mutation.error,
		reset: mutation.reset,
	};
};
