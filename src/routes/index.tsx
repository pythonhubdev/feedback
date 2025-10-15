import { createFileRoute } from "@tanstack/solid-router";
import { Card, CardDescription, CardHeader } from "~/components/ui/card.tsx";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<Card class="m-4 p-2 flex flex-col justify-center align-middle items-start">
			<CardHeader class="p-0">Hello World</CardHeader>
			<CardDescription>Something Feedback</CardDescription>
		</Card>
	);
}
