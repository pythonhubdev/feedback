import { createSignal, Show } from "solid-js";
import { Motion } from "solid-motionone";
import { FeedbackHeader } from "./FeedbackHeader";
import { StepPersonalInfo } from "./feedback/StepPersonalInfo";
import { StepRatings } from "./feedback/StepRatings";
import { StepTextFeedback } from "./feedback/StepTextFeedback";
import { Button } from "./ui/button";

interface PersonalInfoData {
	name: string;
	email: string;
	year: string;
	batch: string;
	department: string;
}

interface RatingsData {
	usefulness: number;
	clarity: number;
	engagement: number;
}

interface TextFeedbackData {
	liked: string;
	improve: string;
	nextTopics: string;
}

interface FeedbackFormProps {
	onComplete: () => void;
	onBack: () => void;
}

export function FeedbackForm(props: FeedbackFormProps) {
	const [currentStep, setCurrentStep] = createSignal(0);
	const [personalInfo, setPersonalInfo] = createSignal<PersonalInfoData>({
		name: "",
		email: "",
		year: "",
		batch: "",
		department: "",
	});
	const [ratings, setRatings] = createSignal<RatingsData>({
		usefulness: 0,
		clarity: 0,
		engagement: 0,
	});
	const [feedback, setFeedback] = createSignal<TextFeedbackData>({
		liked: "",
		improve: "",
		nextTopics: "",
	});

	const totalSteps = 5;

	const canProceed = () => {
		const step = currentStep();
		const info = personalInfo();
		const rating = ratings();
		const text = feedback();

		if (step === 0) {
			return (
				info.name.trim().length > 0 &&
				info.email.trim().length > 0 &&
				info.year &&
				info.batch &&
				info.department
			);
		}
		if (step === 1)
			return (
				rating.usefulness > 0 &&
				rating.clarity > 0 &&
				rating.engagement > 0
			);
		if (step === 2) return text.liked.trim().length > 0;
		if (step === 3) return text.improve.trim().length > 0;
		return true;
	};

	const handleSubmit = () => {
		console.log("Feedback submitted:", {
			personalInfo: personalInfo(),
			ratings: ratings(),
			feedback: feedback(),
		});

		triggerConfetti();

		// Navigate to thank you page immediately after submission
		setTimeout(() => {
			props.onComplete();
		}, 500); // Shorter delay to feel more responsive
	};

	const triggerConfetti = () => {
		if (typeof window !== "undefined" && (window as any).confetti) {
			(window as any).confetti({
				particleCount: 150,
				spread: 70,
				origin: { y: 0.6 },
				colors: ["#000000", "#ffffff", "#666666"],
			});

			setTimeout(() => {
				(window as any).confetti({
					particleCount: 100,
					angle: 60,
					spread: 55,
					origin: { x: 0 },
					colors: ["#000000", "#ffffff", "#666666"],
				});
			}, 200);

			setTimeout(() => {
				(window as any).confetti({
					particleCount: 100,
					angle: 120,
					spread: 55,
					origin: { x: 1 },
					colors: ["#000000", "#ffffff", "#666666"],
				});
			}, 400);
		}
	};

	return (
		<Motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			class="min-h-screen bg-white dark:bg-gray-900"
		>
			{/* Header */}
			<FeedbackHeader
				currentStep={currentStep() + 1}
				totalSteps={totalSteps}
				onBack={props.onBack}
			/>

			{/* Form Content */}
			<div class="px-6 py-12 md:px-12 md:py-16">
				<div class="max-w-4xl mx-auto">
					<Show when={currentStep() === 0}>
						<Motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.4 }}
						>
							<StepPersonalInfo
								data={personalInfo()}
								onChange={setPersonalInfo}
							/>
						</Motion.div>
					</Show>

					<Show when={currentStep() === 1}>
						<Motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.4 }}
						>
							<StepRatings
								data={ratings()}
								onChange={setRatings}
							/>
						</Motion.div>
					</Show>

					<Show when={currentStep() === 2}>
						<Motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.4 }}
						>
							<StepTextFeedback
								step={0}
								data={feedback()}
								onChange={setFeedback}
							/>
						</Motion.div>
					</Show>

					<Show when={currentStep() === 3}>
						<Motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.4 }}
						>
							<StepTextFeedback
								step={1}
								data={feedback()}
								onChange={setFeedback}
							/>
						</Motion.div>
					</Show>

					<Show when={currentStep() === 4}>
						<Motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.4 }}
						>
							<StepTextFeedback
								step={2}
								data={feedback()}
								onChange={setFeedback}
							/>
						</Motion.div>
					</Show>

					{/* Navigation */}
					<div class="flex gap-4 mt-12">
						<Show when={currentStep() > 0}>
							<Button
								onClick={() =>
									setCurrentStep(currentStep() - 1)
								}
								variant="outline"
								class="border-2 border-black dark:border-white px-8 py-6 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
							>
								PREVIOUS
							</Button>
						</Show>

						<Show when={currentStep() < totalSteps - 1}>
							<Button
								onClick={() =>
									setCurrentStep(currentStep() + 1)
								}
								disabled={!canProceed()}
								class="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-8 py-6 disabled:opacity-30 border-0"
							>
								NEXT STEP
							</Button>
						</Show>

						<Show when={currentStep() === totalSteps - 1}>
							<Button
								onClick={handleSubmit}
								class="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-8 py-6 border-0"
							>
								SUBMIT FEEDBACK
							</Button>
						</Show>
					</div>
				</div>
			</div>
		</Motion.div>
	);
}
