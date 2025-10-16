import { createFileRoute, useNavigate } from "@tanstack/solid-router";
import { CareerQuiz } from "~/components/CareerQuiz";

export const Route = createFileRoute("/career")({
	component: CareerRoute,
});

function CareerRoute() {
	const navigate = useNavigate();

	const handleBackToHome = async () => {
		await navigate({ to: "/" });
	};

	const handleComplete = async () => {
		await navigate({ to: "/thank-you" });
	};

	return <CareerQuiz onComplete={handleComplete} onBack={handleBackToHome} />;
}
