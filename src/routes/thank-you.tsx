import { createFileRoute, useNavigate } from "@tanstack/solid-router";
import { ThankYou } from "~/components/ThankYou";

export const Route = createFileRoute("/thank-you")({
	component: ThankYouRoute,
});

function ThankYouRoute() {
	const navigate = useNavigate();

	const handleBackToHome = async () => {
		await navigate({ to: "/" });
	};

	return <ThankYou onBackToHome={handleBackToHome} />;
}
