import typescript from "@rollup/plugin-typescript";

export default {
	input: "src/main.ts",
	output: {
        dir: "build",
		format: "cjs",
	},
	plugins: [typescript({
		tsconfig: "./tsconfig.json",
		declaration: true,
		declarationDir: "build/types"
	})],
};
