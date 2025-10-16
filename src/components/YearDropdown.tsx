import { Calendar } from "lucide-solid";
import { createSignal, For, Show } from "solid-js";

interface YearDropdownProps {
	value?: string;
	onChange: (year: string | null) => void;
	placeholder?: string;
	startYear?: number;
	endYear?: number;
	class?: string;
}

export function YearDropdown(props: YearDropdownProps) {
	const [isOpen, setIsOpen] = createSignal(false);
	const [searchTerm, setSearchTerm] = createSignal("");

	const startYear = props.startYear || 2022;
	const endYear = props.endYear || 2030; // Extend to 2030

	const years = () => {
		const yearsArray = [];
		for (let year = endYear; year >= startYear; year--) {
			yearsArray.push(year.toString());
		}
		return yearsArray;
	};

	const filteredYears = () => {
		const search = searchTerm().toLowerCase();
		if (!search) return years();
		return years().filter((year) => year.includes(search));
	};

	const handleSelect = (year: string) => {
		props.onChange(year);
		setIsOpen(false);
		setSearchTerm("");
	};

	return (
		<div class="relative">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen())}
				class={`border-2 border-black dark:border-white h-10 bg-white dark:bg-gray-950 w-full text-sm px-3 py-2 rounded-md flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${props.class} focus:outline-none focus:border-neutral-400 focus:dark:border-neutral-600`}
			>
				<span
					class={
						props.value
							? "text-black dark:text-white"
							: "text-gray-500"
					}
				>
					{props.value || props.placeholder || "Select year"}
				</span>
				<Calendar class="w-5 h-5 text-gray-500 flex-shrink-0" />
			</button>

			<Show when={isOpen()}>
				<div class="absolute top-full left-0 right-0 z-50 mt-1 bg-white dark:bg-gray-950 border-2 border-black dark:border-white rounded-md shadow-lg max-h-48 overflow-hidden">
					<div class="p-2 border-b border-gray-200 dark:border-gray-700">
						<input
							type="text"
							placeholder="Search year..."
							value={searchTerm()}
							onInput={(e) =>
								setSearchTerm(e.currentTarget.value)
							}
							onClick={(e) => e.stopPropagation()}
							class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500"
							onfocus={(e) => e.currentTarget.select()}
						/>
					</div>

					<div class="max-h-32 overflow-y-auto">
						<For each={filteredYears()}>
							{(year) => (
								<button
									type="button"
									onClick={() => handleSelect(year)}
									class={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors ${
										props.value === year
											? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
											: "text-black dark:text-white"
									} focus:outline-none focus:bg-gray-100 focus:dark:bg-gray-800`}
								>
									{year}
								</button>
							)}
						</For>

						<Show when={filteredYears().length === 0}>
							<div class="px-3 py-4 text-gray-500 text-center">
								No years found
							</div>
						</Show>
					</div>
				</div>
			</Show>

			{/* Click outside to close */}
			<Show when={isOpen()}>
				<button
					type="button"
					class="fixed inset-0 z-40 bg-transparent"
					onClick={() => setIsOpen(false)}
					aria-label="Close year dropdown"
				/>
			</Show>
		</div>
	);
}
