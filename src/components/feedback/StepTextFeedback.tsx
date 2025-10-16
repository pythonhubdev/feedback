import { TextField, TextFieldLabel, TextFieldTextArea } from "../ui/text-field";

interface TextFeedbackData {
	liked: string;
	improve: string;
	nextTopics: string;
}

interface StepTextFeedbackProps {
	step: number;
	data: TextFeedbackData;
	onChange: (data: TextFeedbackData) => void;
}

export function StepTextFeedback(props: StepTextFeedbackProps) {
	const updateField = (field: keyof TextFeedbackData) => (value: string) => {
		props.onChange({ ...props.data, [field]: value });
	};

	const stepConfig = [
		{
			title: "What did you like most?",
			description: "Tell us what resonated with you",
			placeholder: "I really enjoyed learning about...",
		},
		{
			title: "What could be improved?",
			description: "Your honest feedback helps us get better",
			placeholder: "I think it would be better if...",
		},
		{
			title: "What topics interest you?",
			description: "What should we cover in the next session?",
			placeholder: "I'd love to learn about...",
			optional: true,
		},
	];

	const config = stepConfig[props.step];
	const fieldNames: (keyof TextFeedbackData)[] = [
		"liked",
		"improve",
		"nextTopics",
	];
	const fieldName = fieldNames[props.step];

	return (
		<div class="space-y-6">
			<div>
				<h3 class="mb-2 text-black dark:text-white">{config.title}</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-6">
					{config.description}
				</p>
			</div>

			<TextField>
				<TextFieldLabel class="text-sm font-medium mb-2 block text-black dark:text-white"></TextFieldLabel>
				<TextFieldTextArea
					value={props.data[fieldName]}
					onInput={(e) =>
						updateField(fieldName)(e.currentTarget.value)
					}
					placeholder={config.placeholder}
					class="min-h-[200px] border-black dark:border-white resize-none text-sm p-6 bg-white dark:bg-gray-950 text-black dark:text-white focus:ring-border-neutral-200 focus:ring-neutral-300"
				/>
			</TextField>

			{config.optional && (
				<p class="text-sm text-neutral-500 dark:text-neutral-400">
					Optional - but your input matters!
				</p>
			)}
		</div>
	);
}
