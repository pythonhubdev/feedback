import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import FeedbackQueryDevTools from "~/integrations/tanstack/qdevtools.tsx";
import FeedbackQueryProvider from "~/integrations/tanstack/query.tsx";
import styleCss from "../styles.css?url";

export const Route = createRootRouteWithContext()({
	head: () => ({
		links: [{ rel: "stylesheet", href: styleCss }],
	}),
	shellComponent: RootComponent,
});

function RootComponent() {
	return (
		<>
			<FeedbackQueryProvider>
				<HeadContent />
				<Outlet />
				<TanStackRouterDevtools />
				<FeedbackQueryDevTools />
			</FeedbackQueryProvider>
			<Scripts />
		</>
	);
}
