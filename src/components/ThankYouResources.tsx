import { Motion } from "solid-motionone";

interface ResourceLink {
	href: string;
	label: string;
}

interface ThankYouResourcesProps {
	links: ResourceLink[];
}

export function ThankYouResources(props: ThankYouResourcesProps) {
	return (
		<Motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.9 }}
			class="mt-16 pt-8 border-t-2 border-black"
		>
			<p class="text-sm text-neutral-600 mb-4">Want to keep learning?</p>
			<div class="flex flex-wrap justify-center gap-4">
				{props.links.map((link) => (
					<a
						href={link.href}
						class="text-sm underline hover:opacity-60 transition-opacity"
					>
						{link.label}
					</a>
				))}
			</div>
		</Motion.div>
	);
}
