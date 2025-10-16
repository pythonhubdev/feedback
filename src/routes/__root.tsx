import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import MentorshipQueryDevTools from "~/integrations/tanstack/qdevtools.tsx";
import MentorshipQueryProvider from "~/integrations/tanstack/query.tsx";
import styleCss from "../styles.css?url";

export const Route = createRootRouteWithContext()({
	head: () => ({
		links: [{ rel: "stylesheet", href: styleCss }],
		meta: [
			{
				title: "Mentorship.01",
				lang: "en-US",
				charset: "utf-8",
			},
			{
				name: "viewport",
				content:
					"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
			},
		],
	}),
	shellComponent: RootComponent,
});

function RootComponent() {
	return (
		<>
			<MentorshipQueryProvider>
				<HeadContent />
				<Outlet />
				<TanStackRouterDevtools />
				<MentorshipQueryDevTools />
			</MentorshipQueryProvider>
			<Scripts />
		</>
	);
}
