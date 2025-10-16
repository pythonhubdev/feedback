import { Motion } from "solid-motionone";
import { ThankYouContent } from "./ThankYouContent";

interface ThankYouProps {
	onBackToHome: () => void;
}

export function ThankYou(props: ThankYouProps) {
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
