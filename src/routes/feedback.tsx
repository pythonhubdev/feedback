import { createFileRoute, useNavigate } from "@tanstack/solid-router";
import { FeedbackForm } from "~/components/FeedbackForm";

export const Route = createFileRoute("/feedback")({
	component: FeedbackRoute,
});

function FeedbackRoute() {
	const navigate = useNavigate();

	const handleBackToHome = async () => {
		await navigate({ to: "/" });
	};

	const handleComplete = async () => {
		await navigate({ to: "/thank-you" });
	};

	return (
		<FeedbackForm onComplete={handleComplete} onBack={handleBackToHome} />
	);
}
