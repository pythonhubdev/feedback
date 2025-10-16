import { useMutation } from "@tanstack/solid-query";
import { createMemo } from "solid-js";
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
			const client = api();
			const response = await client.feedback.post(data);

			if (!response.data) {
				const errorMessage =
					response.error?.value?.message ||
					response.error?.value?.summary ||
					"Failed to submit feedback";
				throw new Error(errorMessage);
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

	const isSubmitting = createMemo(() => mutation.isPending);

	return {
		submitFeedback: mutation.mutateAsync,
		isSubmitting,
		error: mutation.error,
		reset: mutation.reset,
	};
};
