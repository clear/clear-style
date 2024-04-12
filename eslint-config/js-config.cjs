/** @type { import("eslint").Linter.FlatConfig } */

const js = require('@eslint/js');
const eslintPluginPrettier = require('eslint-plugin-prettier/recommended');

module.exports = [
    // Use recommended plugins for js/ts
    js.configs['recommended'],

    // Configure for use in commonjs
    {
	languageOptions: {
	    sourceType: "commonjs",
	},
    },

    // Allow unused variables that start with _
    {
	rules: {
	    "no-unused-vars": ["warn", {
		"argsIgnorePattern": "^_",
		"varsIgnorePattern": "^_",
		"caughtErrorsIgnorePattern": "^_",
	    }]
	}
    },

    // Then delegate to prettier
    // (note: this must be the last plugin)
    eslintPluginPrettier,
]
