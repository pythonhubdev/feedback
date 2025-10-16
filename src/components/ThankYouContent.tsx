import { Home } from "lucide-solid";
import { Motion } from "solid-motionone";
import { ThankYouIcon } from "./ThankYouIcon";
import { ThankYouResources } from "./ThankYouResources";
import { Button } from "./ui/button";

interface ThankYouContentProps {
	onBackToHome: () => void;
}

export function ThankYouContent(props: ThankYouContentProps) {
	const resourceLinks = [
		{ href: "#", label: "GitHub Resources" },
		{ href: "#", label: "LinkedIn Tips" },
		{ href: "#", label: "Career Guides" },
	];

	return (
		<Motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.2,
				duration: 0.6,
			}}
			class="max-w-2xl text-center"
		>
			<ThankYouIcon />

			<Motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
				class="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white"
			>
				Thanks for your input
			</Motion.h1>

			<Motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.6 }}
				class="text-neutral-600 dark:text-neutral-400 mb-12 text-lg"
			>
				Your feedback helps us create better mentorship sessions. We'll
				use your insights to make the next one even more valuable.
			</Motion.p>

			<Motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.7 }}
				class="space-y-4"
			>
				<Button
					onClick={props.onBackToHome}
					class="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-8 py-6 border-0 w-full md:w-auto"
				>
					<Home class="w-5 h-5 mr-2" />
					BACK TO HOME
				</Button>

				<p class="text-sm text-neutral-500 dark:text-neutral-600">
					Your response has been recorded anonymously
				</p>
			</Motion.div>

			<ThankYouResources links={resourceLinks} />
		</Motion.div>
	);
}
