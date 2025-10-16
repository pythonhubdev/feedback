import { ArrowLeft } from "lucide-solid";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

interface CareerQuizHeaderProps {
	currentStep: number;
	totalSteps: number;
	progress: number;
	onBack: () => void;
}

export function CareerQuizHeader(props: CareerQuizHeaderProps) {
	return (
		<div class="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12 border-b-2 border-black dark:border-white">
			<div class="max-w-4xl mx-auto">
				<Button
					onClick={props.onBack}
					variant="ghost"
					class="flex items-center gap-2 mb-6 sm:mb-8 hover:opacity-60 transition-opacity p-0 h-auto"
				>
					<ArrowLeft class="w-5 h-5" />
					<span class="tracking-wider text-xs sm:text-sm">BACK</span>
				</Button>
				<div class="mb-4 sm:mb-6">
					<h2 class="mb-2 text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white">
						Career Interest Quiz
					</h2>
					<p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
						{props.currentStep === 0
							? "Your Details"
							: `Question ${props.currentStep} of ${props.totalSteps - 1}`}
					</p>
				</div>
				<Progress value={props.progress} class="h-1" />
			</div>
		</div>
	);
}
