import { TextField, TextFieldLabel, TextFieldTextArea } from "../ui/text-field";

interface QuestionTextProps {
	question: string;
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

export function QuestionText(props: QuestionTextProps) {
	return (
		<div>
			<h3 class="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-black dark:text-white">
				{props.question}
			</h3>

			<TextField>
				<TextFieldLabel class="sr-only">Your answer</TextFieldLabel>
				<TextFieldTextArea
					value={props.value}
					onInput={(e) => props.onChange(e.currentTarget.value)}
					placeholder={
						props.placeholder || "Tell us what you're into..."
					}
					class="min-h-[200px] border-2 border-black dark:border-white resize-none text-base p-4 sm:p-6 bg-white dark:bg-gray-950 text-black dark:text-white"
				/>
			</TextField>
		</div>
	);
}
