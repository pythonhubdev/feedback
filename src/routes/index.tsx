import { createFileRoute } from "@tanstack/solid-router";
import { Hero } from "~/components/Hero";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const navigate = Route.useNavigate();

	const handleNavigate = (
		section: "feedback" | "quiz" | "roles" | "suggestions",
	) => {
		switch (section) {
			case "feedback":
				navigate({ to: "/feedback" });
				break;
			case "quiz":
				// TODO: Implement quiz route
				console.log("Quiz not implemented yet");
				break;
			case "roles":
				// TODO: Implement roles route
				console.log("Roles not implemented yet");
				break;
			case "suggestions":
				// TODO: Implement suggestions route
				console.log("Suggestions not implemented yet");
				break;
		}
	};

	return <Hero onNavigate={handleNavigate} />;
}
