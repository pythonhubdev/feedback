import { Sparkles } from "lucide-solid";
import { Motion } from "solid-motionone";
import { ThemeToggle } from "./theme/ThemeToggle";

interface HeaderProps {
	onNavigate: () => void;
}

export function Header(props: HeaderProps) {
	const itemVariants = {
		initial: { opacity: 0, y: 20 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
		},
	};

	return (
		<Motion.header {...itemVariants} class="px-6 py-8 md:px-12 md:py-12">
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
						onClick={props.onNavigate}
					>
						EXPLORE ROLES →
					</Motion.button>
					<ThemeToggle />
				</div>
			</div>
		</Motion.header>
	);
}
