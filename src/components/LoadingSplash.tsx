import { createSignal, onMount } from "solid-js";
import { Motion } from "solid-motionone";

interface LoadingSplashProps {
	onLoadingComplete: () => void;
}

export function LoadingSplash(props: LoadingSplashProps) {
	const [isExiting, setIsExiting] = createSignal(false);

	onMount(() => {
		// Show splash for 2.5 seconds then trigger exit animation
		const timer = setTimeout(() => {
			setIsExiting(true);
			// Wait for exit animation to complete before calling onLoadingComplete
			setTimeout(() => {
				props.onLoadingComplete();
			}, 800);
		}, 2500);

		return () => clearTimeout(timer);
	});

	return (
		<Motion.div
			initial={{ opacity: 1 }}
			animate={{
				opacity: isExiting() ? 0 : 1,
				scale: isExiting() ? 1.2 : 1,
			}}
			transition={{ duration: 0.8 }}
			class="fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center transition-colors duration-200"
		>
			<div class="text-center">
				{/* 3D Cube Container */}
				<div class="perspective-container mb-12">
					<div class="cube-wrapper">
						<div class="cube">
							{/* Front Face */}
							<div class="cube-face front" />
							{/* Back Face */}
							<div class="cube-face back" />
							{/* Right Face */}
							<div class="cube-face right" />
							{/* Left Face */}
							<div class="cube-face left" />
							{/* Top Face */}
							<div class="cube-face top" />
							{/* Bottom Face */}
							<div class="cube-face bottom" />
						</div>
					</div>
				</div>

				{/* Loading Text with Pulsing Effect */}
				<Motion.div
					class="tracking-widest text-sm font-medium text-black dark:text-white"
					animate={{
						opacity: [0.4, 1, 0.4],
					}}
					transition={{
						duration: 2,
						repeat: Number.POSITIVE_INFINITY,
						easing: "ease-in-out",
					}}
				>
					LOADING MENTORSHIP
				</Motion.div>

				{/* Progress Dots */}
				<div class="flex justify-center gap-2 mt-6">
					<Motion.div
						class="w-2 h-2 rounded-full bg-black dark:bg-white"
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0.3, 1, 0.3],
						}}
						transition={{
							duration: 1.5,
							repeat: Number.POSITIVE_INFINITY,
							easing: "ease-in-out",
							delay: 0,
						}}
					/>
					<Motion.div
						class="w-2 h-2 rounded-full bg-black dark:bg-white"
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0.3, 1, 0.3],
						}}
						transition={{
							duration: 1.5,
							repeat: Number.POSITIVE_INFINITY,
							easing: "ease-in-out",
							delay: 0.2,
						}}
					/>
					<Motion.div
						class="w-2 h-2 rounded-full bg-black dark:bg-white"
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0.3, 1, 0.3],
						}}
						transition={{
							duration: 1.5,
							repeat: Number.POSITIVE_INFINITY,
							easing: "ease-in-out",
							delay: 0.4,
						}}
					/>
				</div>
			</div>

			<style>{`
				.perspective-container {
					perspective: 1200px;
					width: 120px;
					height: 120px;
					margin: 0 auto;
				}

				.cube-wrapper {
					width: 120px;
					height: 120px;
					position: relative;
					transform-style: preserve-3d;
					animation: rotateCube 4s infinite linear;
				}

				@keyframes rotateCube {
					0% {
						transform: rotateX(-25deg) rotateY(-25deg);
					}
					100% {
						transform: rotateX(-25deg) rotateY(335deg);
					}
				}

				.cube {
					width: 120px;
					height: 120px;
					position: relative;
					transform-style: preserve-3d;
					animation: breathe 2s infinite ease-in-out;
				}

				@keyframes breathe {
					0%, 100% {
						transform: scale(1);
					}
					50% {
						transform: scale(1.05);
					}
				}

				.cube-face {
					position: absolute;
					width: 120px;
					height: 120px;
					border: 2px solid;
					opacity: 0.95;
					backdrop-filter: blur(10px);
					transition: border-color 0.3s ease, background 0.3s ease;
					backface-visibility: visible;
				}

				.cube-face {
					border-color: #000000;
					background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%);
					box-shadow: 
						inset 0 0 20px rgba(0, 0, 0, 0.05),
						0 0 30px rgba(0, 0, 0, 0.03);
				}

				.dark .cube-face {
					border-color: #ffffff;
					background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%);
					box-shadow: 
						inset 0 0 20px rgba(255, 255, 255, 0.05),
						0 0 30px rgba(255, 255, 255, 0.08);
				}

				.front {
					transform: rotateY(0deg) translateZ(60px);
				}

				.back {
					transform: rotateY(180deg) translateZ(60px);
				}

				.right {
					transform: rotateY(90deg) translateZ(60px);
				}

				.left {
					transform: rotateY(-90deg) translateZ(60px);
				}

				.top {
					transform: rotateX(90deg) translateZ(60px);
				}

				.bottom {
					transform: rotateX(-90deg) translateZ(60px);
				}

				/* Add some animation to the faces */
				.cube-face::before {
					content: '';
					position: absolute;
					inset: 10px;
					border: 1px solid currentColor;
					opacity: 0.2;
					animation: pulse 2s infinite ease-in-out;
				}

				@keyframes pulse {
					0%, 100% {
						opacity: 0.1;
						transform: scale(1);
					}
					50% {
						opacity: 0.3;
						transform: scale(0.95);
					}
				}

				.front::before { animation-delay: 0s; }
				.back::before { animation-delay: 0.2s; }
				.right::before { animation-delay: 0.4s; }
				.left::before { animation-delay: 0.6s; }
				.top::before { animation-delay: 0.8s; }
				.bottom::before { animation-delay: 1s; }
			`}</style>
		</Motion.div>
	);
}
