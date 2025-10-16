import { Sparkles } from "lucide-solid";
import { Motion } from "solid-motionone";

export function ThankYouIcon() {
	return (
		<Motion.div
			initial={{ scale: 0, rotateY: 0 }}
			animate={{ scale: 1, rotateY: 360 }}
			transition={{
				delay: 0.4,
				duration: 0.8,
				easing: [0.22, 1, 0.36, 1],
			}}
			style={{ "transform-style": "preserve-3d" }}
			class="w-20 h-20 bg-black flex items-center justify-center mx-auto mb-8 rounded-lg"
		>
			<Sparkles class="w-10 h-10 text-white" />
		</Motion.div>
	);
}
