import { RatingStars } from "../RatingStars";

interface RatingsData {
	usefulness: number;
	clarity: number;
	engagement: number;
}

interface StepRatingsProps {
	data: RatingsData;
	onChange: (data: RatingsData) => void;
}

export function StepRatings(props: StepRatingsProps) {
	const updateRating = (category: keyof RatingsData) => (value: number) => {
		props.onChange({ ...props.data, [category]: value });
	};

	return (
		<div class="space-y-12">
			<div>
				<h3 class="mb-2 text-black dark:text-white">
					How useful was the session?
				</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-6">
					Rate the practical value you got from it
				</p>
				<RatingStars
					value={props.data.usefulness}
					onChange={updateRating("usefulness")}
				/>
			</div>

			<div>
				<h3 class="mb-2 text-black dark:text-white">
					How clear was the content?
				</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-6">
					Was it easy to understand and follow?
				</p>
				<RatingStars
					value={props.data.clarity}
					onChange={updateRating("clarity")}
				/>
			</div>

			<div>
				<h3 class="mb-2 text-black dark:text-white">
					How engaging was it?
				</h3>
				<p class="text-neutral-600 dark:text-neutral-400 mb-6">
					Did it keep your attention?
				</p>
				<RatingStars
					value={props.data.engagement}
					onChange={updateRating("engagement")}
				/>
			</div>
		</div>
	);
}
