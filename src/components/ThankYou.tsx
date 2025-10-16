import { onCleanup, onMount } from "solid-js";
import { Motion } from "solid-motionone";
import { ThankYouContent } from "./ThankYouContent";

interface ThankYouProps {
	onBackToHome: () => void;
}

// Optional confetti effect for celebrating completion
const triggerConfetti = () => {
	if (typeof window !== "undefined" && (window as any).confetti) {
		(window as any).confetti({
			particleCount: 50,
			spread: 60,
			origin: { y: 0.7 },
			colors: ["#000000", "#ffffff", "#666666"],
		});
	}
};

export function ThankYou(props: ThankYouProps) {
	let confettiTimer: Timer;

	onMount(() => {
		// Trigger confetti after a short delay for celebration effect
		confettiTimer = setTimeout(() => {
			triggerConfetti();
		}, 500);
	});

	onCleanup(() => {
		if (confettiTimer) {
			clearTimeout(confettiTimer);
		}
	});

	return (
		<Motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
			exit={{ opacity: 0 }}
			class="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-6"
		>
			<ThankYouContent onBackToHome={props.onBackToHome} />
		</Motion.div>
	);
}
