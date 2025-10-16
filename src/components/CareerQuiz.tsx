import { createSignal, Match, Show, Switch } from "solid-js";
import { Motion } from "solid-motionone";
import { CareerQuizHeader } from "./career/CareerQuizHeader";
import { CareerResults, getResultContent } from "./career/CareerResults";
import { QuestionChoice } from "./career/QuestionChoice";
import { QuestionText } from "./career/QuestionText";
import { calculateResults, questions } from "./career/questions";
import { StepPersonalInfo } from "./career/StepPersonalInfo";
import { Button } from "./ui/button";

// Extend Window interface for confetti
declare global {
	interface Window {
		confetti?: (options: {
			particleCount: number;
			spread: number;
			origin?: { x?: number; y?: number };
			angle?: number;
			colors?: string[];
		}) => void;
	}
}

interface PersonalInfoData {
	name: string;
	email: string;
	year: string;
	batch: string;
	department: string;
}

interface CareerQuizProps {
	onComplete: () => void;
	onBack: () => void;
}

export function CareerQuiz(props: CareerQuizProps) {
	const [currentQuestion, setCurrentQuestion] = createSignal(-1);
	const [personalInfo, setPersonalInfo] = createSignal<PersonalInfoData>({
		name: "",
		email: "",
		year: "",
		batch: "",
		department: "",
	});
	const [answers, setAnswers] = createSignal<Record<number, string>>({});
	const [showResults, setShowResults] = createSignal(false);

	const totalSteps = questions.length + 1;
	const progress = () => ((currentQuestion() + 2) / totalSteps) * 100;

	const handleAnswer = (answer: string) => {
		setAnswers((prev) => ({
			...prev,
			[questions[currentQuestion()].id]: answer,
		}));
	};

	const handleNext = () => {
		if (currentQuestion() < questions.length - 1) {
			setCurrentQuestion(currentQuestion() + 1);
		} else {
			setShowResults(true);
		}
	};

	const handleQuizComplete = () => {
		// Trigger confetti if available
		if (typeof window !== "undefined") {
			window.confetti?.({
				particleCount: 150,
				spread: 70,
				origin: { y: 0.6 },
				colors: ["#000000", "#ffffff", "#666666"],
			});

			setTimeout(() => {
				window.confetti?.({
					particleCount: 100,
					angle: 60,
					spread: 55,
					origin: { x: 0 },
					colors: ["#000000", "#ffffff", "#666666"],
				});
			}, 200);

			setTimeout(() => {
				window.confetti?.({
					particleCount: 100,
					angle: 120,
					spread: 55,
					origin: { x: 1 },
					colors: ["#000000", "#ffffff", "#666666"],
				});
			}, 400);
		}

		setTimeout(() => {
			props.onComplete();
		}, 1000);
	};

	const handlePrevious = () => {
		if (currentQuestion() > -1) {
			setCurrentQuestion(currentQuestion() - 1);
		}
	};

	const canProceed = () => {
		if (currentQuestion() === -1) {
			const info = personalInfo();
			return (
				info.name.trim().length > 0 &&
				info.email.trim().length > 0 &&
				info.year &&
				info.batch &&
				info.department
			);
		}
		return answers()[questions[currentQuestion()].id]?.trim().length > 0;
	};

	const getResults = () => {
		const role = calculateResults(answers());
		return getResultContent(role);
	};

	return (
		<Show
			when={!showResults()}
			fallback={
				<CareerResults
					result={getResults()}
					otherInterests={answers()[5]}
					onComplete={handleQuizComplete}
				/>
			}
		>
			<Motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				class="min-h-screen bg-white dark:bg-black"
			>
				{/* Header */}
				<CareerQuizHeader
					currentStep={currentQuestion() + 1}
					totalSteps={totalSteps}
					progress={progress()}
					onBack={props.onBack}
				/>

				{/* Question Content */}
				<div class="px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16">
					<div class="max-w-4xl mx-auto">
						<Switch>
							<Match when={currentQuestion() === -1}>
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
							</Match>

							<Match when={currentQuestion() >= 0}>
								<Motion.div
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.4 }}
								>
									<Show
										when={
											questions[currentQuestion()]
												.type === "choice"
										}
										fallback={
											<QuestionText
												question={
													questions[currentQuestion()]
														.question
												}
												value={
													answers()[
														questions[
															currentQuestion()
														].id
													] || ""
												}
												onChange={handleAnswer}
											/>
										}
									>
										<QuestionChoice
											question={
												questions[currentQuestion()]
													.question
											}
											options={
												questions[currentQuestion()]
													.options || []
											}
											value={
												answers()[
													questions[currentQuestion()]
														.id
												] || ""
											}
											onChange={handleAnswer}
										/>
									</Show>
								</Motion.div>
							</Match>
						</Switch>

						{/* Navigation */}
						<div class="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12">
							<Show when={currentQuestion() > -1}>
								<Button
									onClick={handlePrevious}
									variant="outline"
									class="border-2 border-black dark:border-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
								>
									PREVIOUS
								</Button>
							</Show>
							<Button
								onClick={handleNext}
								disabled={!canProceed()}
								class="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-6 sm:px-8 py-4 sm:py-6 disabled:opacity-30 border-0 text-sm sm:text-base w-full sm:w-auto"
							>
								{currentQuestion() === -1
									? "START QUIZ"
									: currentQuestion() === questions.length - 1
										? "SEE RESULTS"
										: "NEXT QUESTION"}
							</Button>
						</div>
					</div>
				</div>
			</Motion.div>
		</Show>
	);
}
