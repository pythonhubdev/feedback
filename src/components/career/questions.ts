export interface Question {
	id: number;
	question: string;
	type: "choice" | "text";
	options?: string[];
	role?: "designer" | "frontend" | "backend" | "general";
}

export const questions: Question[] = [
	{
		id: 1,
		question: "What sounds more exciting to you?",
		type: "choice",
		options: [
			"Creating beautiful visual designs and layouts",
			"Building interactive website features",
			"Solving complex logic and data problems",
			"I'm not sure yet",
		],
		role: "general",
	},
	{
		id: 2,
		question: "When you use an app, what do you notice first?",
		type: "choice",
		options: [
			"The colors, fonts, and overall look",
			"How smooth the animations and interactions are",
			"How fast and reliable it is",
			"I don't really think about it",
		],
		role: "general",
	},
	{
		id: 3,
		question: "Which activity appeals to you most?",
		type: "choice",
		options: [
			"Sketching ideas and making mood boards",
			"Bringing designs to life with code",
			"Working with databases and APIs",
			"Learning a bit of everything",
		],
		role: "general",
	},
	{
		id: 4,
		question: "Did you choose this tech course yourself?",
		type: "choice",
		options: [
			"Yes, I'm genuinely interested in tech",
			"Mostly me, but got some encouragement",
			"Mainly parental or external influence",
			"I'm still figuring it out",
		],
		role: "general",
	},
	{
		id: 5,
		question: "What are your other interests outside of tech?",
		type: "text",
		role: "general",
	},
];

export function calculateResults(
	answers: Record<number, string>,
): "designer" | "frontend" | "backend" {
	const scores = { designer: 0, frontend: 0, backend: 0 };

	if (answers[1]?.includes("visual")) scores.designer += 2;
	if (answers[1]?.includes("interactive")) scores.frontend += 2;
	if (answers[1]?.includes("logic")) scores.backend += 2;

	if (answers[2]?.includes("colors")) scores.designer += 2;
	if (answers[2]?.includes("smooth")) scores.frontend += 2;
	if (answers[2]?.includes("fast")) scores.backend += 2;

	if (answers[3]?.includes("Sketching")) scores.designer += 2;
	if (answers[3]?.includes("Bringing")) scores.frontend += 2;
	if (answers[3]?.includes("databases")) scores.backend += 2;

	const maxScore = Math.max(scores.designer, scores.frontend, scores.backend);

	if (scores.designer === maxScore) return "designer";
	if (scores.frontend === maxScore) return "frontend";
	return "backend";
}
