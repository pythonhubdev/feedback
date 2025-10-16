import { Code, Database, Palette } from "lucide-solid";
import type { JSX } from "solid-js";
import { For } from "solid-js";
import { Motion } from "solid-motionone";
import { Button } from "../ui/button";

interface ResultContent {
	icon: JSX.Element;
	title: string;
	description: string;
	skills: string[];
	resources: { name: string; url: string }[];
}

interface CareerResultsProps {
	result: ResultContent;
	otherInterests?: string;
	onComplete: () => void;
}

export function CareerResults(props: CareerResultsProps) {
	return (
		<Motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			class="min-h-screen bg-white dark:bg-black"
		>
			<div class="px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16">
				<div class="max-w-4xl mx-auto">
					<Motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						<div class="mb-6 sm:mb-8 text-black dark:text-white">
							{props.result.icon}
						</div>
						<h1 class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">
							{props.result.title}
						</h1>
						<p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12 max-w-3xl">
							{props.result.description}
						</p>

						<div class="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
							<div class="border-2 border-black dark:border-white p-6 sm:p-8">
								<h3 class="mb-4 text-lg sm:text-xl font-bold text-black dark:text-white">
									Skills to explore
								</h3>
								<ul class="space-y-3">
									<For each={props.result.skills}>
										{(skill) => (
											<li class="flex items-center gap-2 text-sm sm:text-base text-black dark:text-white">
												<div class="w-1.5 h-1.5 bg-black dark:bg-white" />
												<span>{skill}</span>
											</li>
										)}
									</For>
								</ul>
							</div>

							<div class="border-2 border-black dark:border-white p-6 sm:p-8">
								<h3 class="mb-4 text-lg sm:text-xl font-bold text-black dark:text-white">
									Where to start
								</h3>
								<ul class="space-y-3">
									<For each={props.result.resources}>
										{(resource) => (
											<li class="text-sm sm:text-base">
												<a
													href={resource.url}
													class="hover:opacity-60 transition-opacity underline text-black dark:text-white"
												>
													{resource.name}
												</a>
											</li>
										)}
									</For>
								</ul>
							</div>
						</div>

						{props.otherInterests && (
							<div class="border-2 border-black dark:border-white p-6 sm:p-8 mb-8 sm:mb-12">
								<h3 class="mb-4 text-lg sm:text-xl font-bold text-black dark:text-white">
									Connecting your interests to tech
								</h3>
								<p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4">
									You mentioned:{" "}
									<span class="text-black dark:text-white italic">
										"{props.otherInterests}"
									</span>
								</p>
								<p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
									These interests can totally intersect with
									tech! Art → UI/UX design or game graphics.
									Music → building streaming apps or audio
									tools. Gaming → game development or esports
									platforms. Writing → content strategy or
									documentation. Tech is a tool for anything
									you're passionate about.
								</p>
							</div>
						)}

						<Button
							onClick={props.onComplete}
							class="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-6 sm:px-8 py-4 sm:py-6 border-0 text-sm sm:text-base"
						>
							FINISH QUIZ
						</Button>
					</Motion.div>
				</div>
			</div>
		</Motion.div>
	);
}

export function getResultContent(
	role: "designer" | "frontend" | "backend",
): ResultContent {
	const results: Record<string, ResultContent> = {
		designer: {
			icon: <Palette class="w-12 h-12 sm:w-16 sm:h-16" />,
			title: "You might vibe with UI/UX Design",
			description:
				"You seem drawn to the visual and creative side of tech. UI/UX designers create the look, feel, and flow of digital products—like designing the Instagram interface or planning how a user navigates an app.",
			skills: [
				"Figma",
				"Adobe XD",
				"Color theory",
				"User research",
				"Prototyping",
			],
			resources: [
				{ name: "Figma Basics", url: "#" },
				{ name: "Daily UI Challenge", url: "#" },
				{ name: "Refactoring UI", url: "#" },
			],
		},
		frontend: {
			icon: <Code class="w-12 h-12 sm:w-16 sm:h-16" />,
			title: "Frontend Development could be your thing",
			description:
				"You're interested in bringing designs to life with code. Frontend developers build the interactive parts of websites—buttons, animations, forms—using HTML, CSS, and JavaScript.",
			skills: [
				"HTML/CSS",
				"JavaScript",
				"React",
				"Responsive design",
				"Animation",
			],
			resources: [
				{ name: "freeCodeCamp", url: "#" },
				{ name: "Frontend Mentor", url: "#" },
				{ name: "JavaScript30", url: "#" },
			],
		},
		backend: {
			icon: <Database class="w-12 h-12 sm:w-16 sm:h-16" />,
			title: "Backend Development might suit you",
			description:
				"You like solving logical problems and working with data. Backend developers build the server-side logic, databases, and APIs that power apps—the engine under the hood.",
			skills: [
				"Python/Node.js",
				"Databases",
				"APIs",
				"Server logic",
				"Problem solving",
			],
			resources: [
				{ name: "CS50", url: "#" },
				{ name: "The Odin Project", url: "#" },
				{ name: "Backend Roadmap", url: "#" },
			],
		},
	};

	return results[role];
}
