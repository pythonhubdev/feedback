import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { TextField, TextFieldInput, TextFieldLabel } from "../ui/text-field";
import { YearDropdown } from "../YearDropdown";

interface PersonalInfoData {
	name: string;
	email: string;
	year: string;
	batch: string;
	department: string;
}

interface StepPersonalInfoProps {
	data: PersonalInfoData;
	onChange: (data: PersonalInfoData) => void;
}

export function StepPersonalInfo(props: StepPersonalInfoProps) {
	const startYear = 2025;

	// Map Roman numerals to their numeric values
	const yearOptions = [
		{ label: "I", value: "1" },
		{ label: "II", value: "2" },
		{ label: "III", value: "3" },
		{ label: "IV", value: "4" },
	];

	const departments = ["Computer Science and Engineering", "AIDS", "CSBS"];

	const updateField =
		(field: keyof PersonalInfoData) => (value: string | null) => {
			props.onChange({ ...props.data, [field]: value || "" });
		};

	return (
		<div class="space-y-8">
			<div>
				<h3 class="mb-2 text-black dark:text-white">
					Let's start with your details
				</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-8">
					This helps us organize and personalize feedback
				</p>
			</div>

			<div class="space-y-6">
				<TextField>
					<TextFieldLabel class="text-sm font-medium mb-2 block text-black dark:text-white">
						Name *
					</TextFieldLabel>
					<TextFieldInput
						id="name"
						type="text"
						value={props.data.name}
						onInput={(e) =>
							updateField("name")(e.currentTarget.value)
						}
						placeholder="Your full name"
						class="border-2 border-black dark:border-white h-12 text-sm bg-white dark:bg-gray-950 text-black dark:text-white"
					/>
				</TextField>

				<TextField>
					<TextFieldLabel class="text-sm font-medium mb-2 block text-black dark:text-white">
						Email *
					</TextFieldLabel>
					<TextFieldInput
						id="email"
						type="email"
						value={props.data.email}
						onInput={(e) =>
							updateField("email")(e.currentTarget.value)
						}
						placeholder="your.email@example.com"
						class="border-2 border-black dark:border-white h-12 text-sm bg-white dark:bg-gray-950 text-black dark:text-white"
					/>
				</TextField>

				<div class="grid md:grid-cols-2 gap-6">
					<TextField>
						<TextFieldLabel class="text-sm font-medium mb-2 block text-black dark:text-white">
							Year *
						</TextFieldLabel>
						<Select
							value={props.data.year}
							onChange={updateField("year")}
							options={yearOptions.map((opt) => opt.value)}
							placeholder="Select year"
							itemComponent={(props) => {
								const option = yearOptions.find(
									(opt) => opt.value === props.item.rawValue,
								);
								return (
									<SelectItem item={props.item}>
										{option?.label || props.item.rawValue}
									</SelectItem>
								);
							}}
						>
							<SelectTrigger class="border-2 border-black dark:border-white h-10 bg-white dark:bg-gray-950 w-full text-sm">
								<SelectValue<string>>
									{(state) => {
										const selectedValue =
											state.selectedOption();
										const option = yearOptions.find(
											(opt) =>
												opt.value === selectedValue,
										);
										return option?.label || selectedValue;
									}}
								</SelectValue>
							</SelectTrigger>
							<SelectContent />
						</Select>
					</TextField>

					<TextField>
						<TextFieldLabel class="text-sm font-medium mb-2 block text-black dark:text-white">
							Batch Year *
						</TextFieldLabel>
						<YearDropdown
							value={props.data.batch}
							onChange={updateField("batch")}
							startYear={startYear}
							endYear={2035}
							placeholder="Select batch year"
							class="border-2 border-black dark:border-white"
						/>
					</TextField>
				</div>

				<TextField>
					<TextFieldLabel class="text-sm font-medium mb-2 block text-black dark:text-white">
						Department *
					</TextFieldLabel>
					<Select
						value={props.data.department}
						onChange={updateField("department")}
						options={departments}
						placeholder="Select your department"
						itemComponent={(props) => (
							<SelectItem item={props.item}>
								{props.item.rawValue}
							</SelectItem>
						)}
					>
						<SelectTrigger class="border-2 border-black dark:border-white h-10 bg-white dark:bg-gray-950 w-full text-sm">
							<SelectValue<string>>
								{(state) => state.selectedOption()}
							</SelectValue>
						</SelectTrigger>
						<SelectContent />
					</Select>
				</TextField>
			</div>
		</div>
	);
}
