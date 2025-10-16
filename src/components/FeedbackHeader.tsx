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
		<div class="px-6 py-8 md:px-12 md:py-12 border-b-2 border-black dark:border-white bg-white dark:bg-gray-900">
			<div class="max-w-4xl mx-auto">
				<Button
					onClick={props.onBack}
					variant="outline"
					class="flex items-center gap-2 mb-8 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
				>
					<ArrowLeft class="w-5 h-5" />
					<span class="tracking-wider text-sm">BACK</span>
				</Button>
				<div class="mb-6">
					<h2 class="mb-2 text-black dark:text-white">
						Session Feedback
					</h2>
					<p class="text-neutral-600 dark:text-neutral-400">
						Step {props.currentStep} of {props.totalSteps}
					</p>
				</div>
				<Progress value={progress()} />
			</div>
		</div>
	);
}
