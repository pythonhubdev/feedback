import { createFileRoute } from "@tanstack/solid-router";
import { ThankYou } from "~/components/ThankYou";

export const Route = createFileRoute("/feedback/thank-you")({
	component: ThankYouRoute,
});

function ThankYouRoute() {
	const navigate = Route.useNavigate();

	const handleBackToHome = () => {
		navigate({ to: "/" });
	};

	return <ThankYou onBackToHome={handleBackToHome} />;
}
