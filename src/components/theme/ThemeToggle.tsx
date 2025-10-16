import { Moon, Sun } from "lucide-solid";
import { createEffect, createSignal, onMount } from "solid-js";
import { Motion } from "solid-motionone";

export function ThemeToggle() {
	const [currentTheme, setCurrentTheme] = createSignal<"light" | "dark">(
		"light",
	);

	// Load theme from localStorage on mount
	onMount(() => {
		const savedTheme = localStorage.getItem("theme") as
			| "light"
			| "dark"
			| null;
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		const theme = savedTheme || (prefersDark ? "dark" : "light");
		setCurrentTheme(theme);
		applyTheme(theme);
	});

	// Apply theme to document
	const applyTheme = (theme: "light" | "dark") => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	};

	// Apply theme whenever it changes
	createEffect(() => {
		applyTheme(currentTheme());
	});

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
