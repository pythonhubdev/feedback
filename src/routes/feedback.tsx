import { createFileRoute } from "@tanstack/solid-router";
import { FeedbackForm } from "~/components/FeedbackForm";

export const Route = createFileRoute("/feedback")({
	component: FeedbackRoute,
});

function FeedbackRoute() {
	const navigate = Route.useNavigate();

	const handleBackToHome = () => {
		navigate({ to: "/" });
	};

	const handleComplete = () => {
		navigate({ to: "/feedback/thank-you" });
	};

	return (
		<FeedbackForm onComplete={handleComplete} onBack={handleBackToHome} />
	);
}
