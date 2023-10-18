module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	plugins: ["jest"],
	extends: ["airbnb-base", "prettier"],
	overrides: [
		{
			env: {
				node: true,
				"jest/global": true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {
		"no-console": "off",
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error",
	},
};
