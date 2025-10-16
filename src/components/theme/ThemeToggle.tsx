import { Moon, Sun } from "lucide-solid";
import { createSignal } from "solid-js";
import { Motion } from "solid-motionone";

export function ThemeToggle() {
	const [currentTheme, setCurrentTheme] = createSignal("light");

	const handleToggle = () => {
		const newTheme = currentTheme() === "light" ? "dark" : "light";
		setCurrentTheme(newTheme);
	};
	return (
		<Motion.button
			hover={{ scale: 1.05 }}
			press={{ scale: 0.95 }}
			class="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
			onClick={handleToggle}
			aria-label="Toggle theme"
		>
			{currentTheme() === "light" ? (
				<Moon class="w-5 h-5 text-gray-700 dark:text-gray-300" />
			) : (
				<Sun class="w-5 h-5 text-gray-700 dark:text-gray-300" />
			)}
		</Motion.button>
	);
}
