import { ArrowRight, Compass, MessageSquare, Sparkles } from "lucide-solid";
import { Motion } from "solid-motionone";
import { ThemeToggle } from "./theme/ThemeToggle";
import { Button } from "./ui/button";

interface HeroProps {
	onNavigate: (
		section: "feedback" | "quiz" | "roles" | "suggestions",
	) => void;
}

export function Hero(props: HeroProps) {
	// Animation variants for container and items
	const containerVariants = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		initial: { opacity: 0, y: 20 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
		},
	};

	const cardVariants = {
		initial: { opacity: 0, y: 30 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
		},
	};

	return (
		<Motion.div
			{...containerVariants}
			exit={{ opacity: 0, transition: { duration: 0.3 } }}
			class="min-h-screen flex flex-col"
		>
			{/* Header */}
			<Motion.header
				{...itemVariants}
				class="px-6 py-8 md:px-12 md:py-12"
			>
				<div class="max-w-7xl mx-auto flex items-center justify-between">
					<div class="flex items-center gap-2">
						<div class="w-10 h-10 bg-black dark:bg-white flex items-center justify-center rounded-lg">
							<Sparkles class="w-5 h-5 text-white dark:text-black" />
						</div>
						<span class="tracking-tight text-black dark:text-white">
							MENTORSHIP.01
						</span>
					</div>
					<div class="flex items-center gap-4">
						<Motion.button
							hover={{ x: 5 }}
							class="text-sm tracking-wider hover:opacity-60 transition-opacity text-black dark:text-white"
							onClick={() => props.onNavigate("roles")}
						>
							EXPLORE ROLES →
						</Motion.button>
						<ThemeToggle />
					</div>
				</div>
			</Motion.header>

			{/* Main Content */}
			<main class="flex-1 px-6 md:px-12 pb-12">
				<div class="max-w-7xl mx-auto">
					{/* Hero Text */}
					<Motion.div {...itemVariants} class="mb-16 md:mb-24">
						<Motion.h1
							class="mb-6 max-w-5xl text-black dark:text-white"
							{...itemVariants}
						>
							Thanks for showing up.
							<br />
							Now let's talk about
							<br />
							<span class="italic">your future.</span>
						</Motion.h1>
						<Motion.p
							{...itemVariants}
							class="max-w-2xl text-neutral-600 dark:text-neutral-400"
						>
							You just wrapped a 2-hour session on GitHub and
							LinkedIn. We want to know what you thought, where
							you're headed, and what you actually care about in
							tech.
						</Motion.p>
					</Motion.div>

					{/* Action Cards */}
					<Motion.div
						{...containerVariants}
						class="grid md:grid-cols-2 gap-6 md:gap-8 mb-12"
					>
						{/* Feedback Card */}
						<Motion.div
							{...cardVariants}
							hover={{
								y: -8,
								rotateX: 5,
								rotateY: 5,
								transition: { duration: 0.3 },
							}}
							style={{ "transform-style": "preserve-3d" }}
							class="group cursor-pointer"
							onClick={() => props.onNavigate("feedback")}
						>
							<div class="border-2 border-black dark:border-white p-8 md:p-12 bg-white dark:bg-gray-950 hover:bg-black dark:hover:bg-white transition-colors duration-300">
								<MessageSquare class="w-12 h-12 mb-6 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
								<h2 class="mb-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
									Give Feedback
								</h2>
								<p class="text-neutral-600 dark:text-neutral-400 mb-8 group-hover:text-neutral-300 dark:group-hover:text-neutral-700 transition-colors">
									Tell us what worked, what didn't, and what
									you want to learn next.
								</p>
								<div class="flex items-center gap-2 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
									<span class="tracking-wider text-sm">
										START
									</span>
									<ArrowRight class="w-5 h-5 group-hover:translate-x-2 transition-transform" />
								</div>
							</div>
						</Motion.div>

						{/* Career Quiz Card */}
						<Motion.div
							{...cardVariants}
							hover={{
								y: -8,
								rotateX: 5,
								rotateY: -5,
								transition: { duration: 0.3 },
							}}
							style={{ "transform-style": "preserve-3d" }}
							class="group cursor-pointer"
							onClick={() => props.onNavigate("quiz")}
						>
							<div class="border-2 border-black dark:border-white p-8 md:p-12 bg-white dark:bg-gray-950 hover:bg-black dark:hover:bg-white transition-colors duration-300">
								<Compass class="w-12 h-12 mb-6 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
								<h2 class="mb-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
									Take Career Quiz
								</h2>
								<p class="text-neutral-600 dark:text-neutral-400 mb-8 group-hover:text-neutral-300 dark:group-hover:text-neutral-700 transition-colors">
									Discover which tech role matches your
									interests and skills.
								</p>
								<div class="flex items-center gap-2 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
									<span class="tracking-wider text-sm">
										START
									</span>
									<ArrowRight class="w-5 h-5 group-hover:translate-x-2 transition-transform" />
								</div>
							</div>
						</Motion.div>
					</Motion.div>

					{/* Bottom CTA */}
					<Motion.div
						{...itemVariants}
						class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 border-2 border-black dark:border-white bg-white dark:bg-gray-950"
					>
						<div>
							<h3 class="mb-2 text-black dark:text-white">
								Have ideas for next session?
							</h3>
							<p class="text-neutral-600 dark:text-neutral-400">
								Help us plan topics that actually interest you.
							</p>
						</div>
						<Button
							onClick={() => props.onNavigate("suggestions")}
							class="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-8 py-6 border-0"
						>
							SUGGEST TOPICS
						</Button>
					</Motion.div>
				</div>
			</main>
		</Motion.div>
	);
}
