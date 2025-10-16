import { Star } from "lucide-solid";
import { For } from "solid-js";
import { Motion } from "solid-motionone";

interface RatingStarsProps {
	value: number;
	onChange: (value: number) => void;
}

export function RatingStars(props: RatingStarsProps) {
	return (
		<div class="flex gap-2">
			<For each={[1, 2, 3, 4, 5]}>
				{(star) => (
					<Motion.button
						hover={{ scale: 1.1 }}
						press={{ scale: 0.95 }}
						onClick={() => props.onChange(star)}
						class="focus:outline-none"
					>
						<Star
							class={`w-8 h-8 md:w-10 md:h-10 transition-colors ${
								star <= props.value
									? "fill-black dark:fill-white stroke-black dark:stroke-white"
									: "stroke-black dark:stroke-white fill-white dark:fill-transparent"
							}`}
						/>
					</Motion.button>
				)}
			</For>
		</div>
	);
}
