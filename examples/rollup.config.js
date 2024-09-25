import typescript from "@rollup/plugin-typescript";

const examples = ["getting_started"];

export default examples.map((example) => ({
    input: `examples/${example}/${example}.ts`,
    output: {
        dir: `examples/build/${example}`,
        format: "es",
    },
    plugins: [typescript({
        tsconfig: "examples/tsconfig.json",
    })],
}));
