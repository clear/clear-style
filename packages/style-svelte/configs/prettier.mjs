export default {
	"useTabs": false,
	"singleQuote": false,
	"trailingComma": "all",
	"printWidth": 100,
	"semi": true,
	"tabWidth": 4,
	"plugins": ["prettier-plugin-svelte"],
	"overrides": [
		{
			"files": "*.svelte",
			"options": {
				"parser": "svelte"
			}
		}
	]
}
