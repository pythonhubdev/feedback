import { ArrowLeft } from "lucide-solid";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

interface FeedbackHeaderProps {
	currentStep: number;
	totalSteps: number;
	onBack: () => void;
}

export function FeedbackHeader(props: FeedbackHeaderProps) {
	const progress = () => (props.currentStep / props.totalSteps) * 100;

	return (
		<div class="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12 border-b-2 border-black dark:border-white bg-white dark:bg-black">
			<div class="max-w-4xl mx-auto">
				<Button
					onClick={props.onBack}
					variant="outline"
					class="flex items-center gap-2 mb-6 sm:mb-8 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black px-4 py-2 sm:px-6 sm:py-3"
				>
					<ArrowLeft class="w-4 h-4 sm:w-5 sm:h-5" />
					<span class="tracking-wider text-xs sm:text-sm">BACK</span>
				</Button>
				<div class="mb-4 sm:mb-6">
					<h2 class="mb-2 text-black dark:text-white text-lg sm:text-xl font-medium">
						Session Feedback
					</h2>
					<p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
						Step {props.currentStep} of {props.totalSteps}
					</p>
				</div>
				<Progress value={progress()} class="h-0.5" />
			</div>
		</div>
	);
}
