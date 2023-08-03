module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:storybook/recommended"],
	overrides: [{
		env: {
			"node": true
		},
		files: [".eslintrc.{js,cjs}"],
		parserOptions: {
			sourceType: "script"
		}
	}],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["@typescript-eslint", "react"],
	rules: {
		"linebreak-style": "off",
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/ban-ts-comment": "warn",
		"no-mixed-spaces-and-tabs": "off",
		"react/prop-types": "off",
		"react/no-unescaped-entities": "off"
	}
}