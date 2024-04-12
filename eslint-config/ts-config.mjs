/** @type { import("eslint").Linter.FlatConfig } */

import js from '@eslint/js';
import ts from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default ts.config(
    // Use recommended plugins for js/ts
    js.configs['recommended'],
    ...ts.configs['recommended'],

    // Allow unused variables that start with _
    {
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn", {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_",
            }]
        }
    },
    
    // Then delegate to prettier
    // (note: this must be the last plugin)
    eslintPluginPrettier,
)
