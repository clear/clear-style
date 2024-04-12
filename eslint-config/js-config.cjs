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
    
    // Then delegate to prettier
    // (note: this must be the last plugin)
    eslintPluginPrettier,
]
