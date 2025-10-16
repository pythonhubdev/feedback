import { createRouter } from "@tanstack/solid-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
export const getRouter = () => {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultNotFoundComponent: () => (
			<div class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
				<div class="text-center px-6">
					<h1 class="text-6xl font-bold text-black dark:text-white mb-4">
						404
					</h1>
					<p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
						Page not found
					</p>
					<a
						href="/"
						class="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
					>
						Go Home
					</a>
				</div>
			</div>
		),
	});
};
