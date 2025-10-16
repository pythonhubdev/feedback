import { useMutation } from "@tanstack/solid-query";
import { createMemo } from "solid-js";
import { toast } from "solid-sonner";
import { api } from "~/routes/api.$.ts";
import type { CareerResult } from "~/server/career/schema.ts";

interface CareerSubmissionData {
	name: string;
	email: string;
	year: number;
	batch: number;
	department: string;
	reasonToChooseTech: string;
	otherInterests: string;
	result: CareerResult;
}

export function useCareerSubmission() {
	const mutation = useMutation(() => ({
		mutationKey: ["career submission"],
		mutationFn: async (data: CareerSubmissionData) => {
			const client = api();
			const response = await client.career.post(data);

			if (!response.data) {
				const errorMessage =
					response.error?.value?.message ||
					response.error?.value?.summary ||
					"Failed to submit career information";
				throw new Error(errorMessage);
			}

			return response.data;
		},
		onSuccess: () => {
			toast.success(
				"Career information submitted successfully! Check your results.",
			);
		},
		onError: (error: Error) => {
			toast.error(error.message || "Failed to submit. Please try again.");
		},
	}));

	const isSubmitting = createMemo(() => mutation.isPending);

	return {
		submitCareer: mutation.mutateAsync,
		isSubmitting,
		error: mutation.error,
		reset: mutation.reset,
	};
}
