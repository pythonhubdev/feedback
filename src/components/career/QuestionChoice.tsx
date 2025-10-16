import { For } from "solid-js";
import { Motion } from "solid-motionone";
import {
	RadioGroup,
	RadioGroupItem,
	RadioGroupItemLabel,
} from "../ui/radio-group";

interface QuestionChoiceProps {
	question: string;
	options: string[];
	value: string;
	onChange: (value: string) => void;
}

export function QuestionChoice(props: QuestionChoiceProps) {
	return (
		<div>
			<h3 class="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-black dark:text-white">
				{props.question}
			</h3>

			<RadioGroup
				value={props.value}
				onChange={props.onChange}
				class="space-y-4"
			>
				<For each={props.options}>
					{(option, _index) => (
						<Motion.div
							animate={{ x: [0, 4, 0] }}
							transition={{ duration: 0.3 }}
							onMouseEnter={(e: MouseEvent) => {
								const target = e.currentTarget as HTMLElement;
								target.style.transform = "translateX(4px)";
							}}
							onMouseLeave={(e: MouseEvent) => {
								const target = e.currentTarget as HTMLElement;
								target.style.transform = "translateX(0)";
							}}
							class="border-2 border-black dark:border-white p-4 sm:p-6 cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
							onClick={() => props.onChange(option)}
						>
							<RadioGroupItem
								value={option}
								class="flex items-center gap-4"
							>
								<RadioGroupItemLabel class="cursor-pointer flex-1 text-sm sm:text-base group-hover:text-white dark:group-hover:text-black">
									{option}
								</RadioGroupItemLabel>
							</RadioGroupItem>
						</Motion.div>
					)}
				</For>
			</RadioGroup>
		</div>
	);
}
