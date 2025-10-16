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
			class="min-h-screen flex flex-col bg-white dark:bg-black"
		>
			{/* Header */}
			<Motion.header
				{...itemVariants}
				class="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12"
			>
				<div class="max-w-7xl mx-auto flex items-center justify-between">
					<div class="flex items-center gap-2">
						<div class="w-8 h-8 sm:w-10 sm:h-10 bg-black dark:bg-white flex items-center justify-center">
							<Sparkles class="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-black" />
						</div>
						<span class="text-sm sm:text-base tracking-tight text-black dark:text-white">
							MENTORSHIP.01
						</span>
					</div>
					<div class="flex items-center gap-2 sm:gap-4">
						<Motion.button
							hover={{ x: 5 }}
							class="text-xs sm:text-sm tracking-wider hover:opacity-60 transition-opacity text-black dark:text-white hidden sm:block"
							onClick={() => props.onNavigate("roles")}
						>
							EXPLORE ROLES →
						</Motion.button>
						<ThemeToggle />
					</div>
				</div>
			</Motion.header>

			{/* Main Content */}
			<main class="flex-1 px-4 sm:px-6 md:px-12 pb-8 sm:pb-12">
				<div class="max-w-7xl mx-auto">
					{/* Hero Text */}
					<Motion.div
						{...itemVariants}
						class="mb-8 sm:mb-12 md:mb-16"
					>
						<Motion.h1
							class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 max-w-5xl text-black dark:text-white leading-tight"
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
							class="text-sm sm:text-base md:text-lg max-w-2xl text-neutral-600 dark:text-neutral-400"
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
						class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12"
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
							<div class="border-2 border-black dark:border-white p-6 sm:p-8 md:p-12 bg-white dark:bg-black hover:bg-black dark:hover:bg-white transition-colors duration-300">
								<MessageSquare class="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
								<h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
									Give Feedback
								</h2>
								<p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 group-hover:text-neutral-300 dark:group-hover:text-neutral-700 transition-colors">
									Tell us what worked, what didn't, and what
									you want to learn next.
								</p>
								<div class="flex items-center gap-2 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
									<span class="tracking-wider text-xs sm:text-sm">
										START
									</span>
									<ArrowRight class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
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
							<div class="border-2 border-black dark:border-white p-6 sm:p-8 md:p-12 bg-white dark:bg-black hover:bg-black dark:hover:bg-white transition-colors duration-300">
								<Compass class="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
								<h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
									Take Career Quiz
								</h2>
								<p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 group-hover:text-neutral-300 dark:group-hover:text-neutral-700 transition-colors">
									Discover which tech role matches your
									interests and skills.
								</p>
								<div class="flex items-center gap-2 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">
									<span class="tracking-wider text-xs sm:text-sm">
										START
									</span>
									<ArrowRight class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
								</div>
							</div>
						</Motion.div>
					</Motion.div>

					{/* Bottom CTA */}
					<Motion.div
						{...itemVariants}
						class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 p-6 sm:p-8 border-2 border-black dark:border-white bg-white dark:bg-black"
					>
						<div>
							<h3 class="text-lg sm:text-xl font-bold mb-2 text-black dark:text-white">
								Have ideas for next session?
							</h3>
							<p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
								Help us plan topics that actually interest you.
							</p>
						</div>
						<Button
							onClick={() => props.onNavigate("suggestions")}
							disabled={true}
							class="w-full md:w-auto bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-6 sm:px-8 py-4 sm:py-6 border-0 text-sm sm:text-base whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
						>
							COMING SOON...
						</Button>
					</Motion.div>
				</div>
			</main>
		</Motion.div>
	);
}
