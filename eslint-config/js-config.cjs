/** @type { import("eslint").Linter.FlatConfig } */

const js = require('@eslint/js');
const eslintPluginPrettier = require('eslint-plugin-prettier/recommended');

module.exports = [
    // Use recommended plugins for js/ts
    js.configs['recommended'],
    
    // Then delegate to prettier
    // (note: this must be the last plugin)
    eslintPluginPrettier,
]
