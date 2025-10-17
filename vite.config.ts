import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import solidPlugin from "vite-plugin-solid";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		viteTsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		nitroV2Plugin({}),
		tailwindcss(),
		tanstackStart(),
		solidPlugin({ ssr: true }),
		devtools(),
		nodePolyfills({
			include: ["buffer", "process"],
			globals: {
				Buffer: true,
				global: true,
				process: true,
			},
			protocolImports: false,
		}),
	],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./src"),
		},
	},
	envPrefix: ["VITE_", "MENTORSHIP_"],
});
