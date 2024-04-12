# 🧦👒 Clear style

Base configuration for clear code style.

## Use with a project

First add the clear-style config packages as a dev dependency.

```bash
npm install -D @clear/eslint-config @clear/prettier-config
```

Then add eslint and prettier as dev dependencies. (Installing this second ensures that the types match the peer deps of `@clear/eslint-config` and `@clear/prettier-config`)

```bash
npm install -D eslint prettier
```

Now create a `eslint.config.mjs` file to house your eslint configuration
It should contain the following.

```js
import clearConfig from "@clear/eslint-config/ts";

export default [
    // Put any rule overrides or plugins here
    // myPlugin,

    ...clearConfig,
];
```

> [!NOTE]
> If using `clear-style` in a common js project without typescript, you should instead create a `eslint.config.cjs` file and
> import the `@clear/eslint-config/js` config bundle.

Now set the `prettier` config key in your `package.json`.

```json
{
    "name": "my-package",
    "version": "0.0.0",
    "prettier": "@clear/prettier-config",
}
```

> [!NOTE]
> If you need to enable plugins or override the prettier config for your project,
> you will instead need to create a `.prettierrc.mjs` file and spread the clear config into the export.
> Checkout [Plugins](#plugins) below for more details.

Finally, add the eslint scripts to your `package.json`. When you call eslint it will also use prettier for style linting.

```json
{
    "name": "my-package",
    "version": "0.0.0",
    "prettier": "@clear/prettier-config"
    "scripts": {
        "lint": "eslint .",
        "format": "eslint --fix .",
    },
}
```

## Plugins (support for `svelte`, `angular` etc)

For maximum compatability, the configuration in this package doesn't include plugins to support svelte or angular syntax etc.
To support those you'll need to add them to both your eslint and prettier configurations. 

To add a plugin to your eslint config, import the plugin in the `eslint.config.mjs` file
and add it to the *start* of the config array.

```js
import clearConfig from "@clear/eslint-config/ts";
import someEslintPlugin from "some-eslint-plugin";

export default [
    someEslintPlugin, // (depending on the plugin, you may need to use the ... spread operator)
    ...clearConfig,
];
```

For prettier, you'll need to make sure you are using a seperate `.prettierrc.mjs` file and then add its name to the plugins array.
Note that you don't need to import it in the config. [Check out the prettier plugin docs for more details](https://prettier.io/docs/en/plugins).

```js
import prettierConfig from "@clear/prettier-config";

export default {
    ...prettierConfig,
    
    plugins: ['my-plugin-package-name'],
}
```

### Svelte Support

> [!WARNING]
> This setup will still be valid but Im going to setup `/svelte` exports that provide a shared svelte setup.

To support svelte syntax you'll need to make these changes to your config.

First install `prettier-plugin-svelte` and `eslint-plugin-svelte`

```bash
npm i -D prettier-plugin-svelte eslint-plugin-svelte
```

Create a `.prettierrc.mjs` if you haven't already, then add `prettier-plugin-svelte` to the plugins array and add an override for svelte file extensions

```js
import prettierConfig from "@clear/prettier-config";

export default {
    ...prettierConfig,
    "plugins": ["prettier-plugin-svelte"],
    "overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
}
```

Add the eslint svelte plugin to your eslint config.

```js
import eslintConfig from '@clear/eslint-config/ts';
import eslintSvelte from 'eslint-plugin-svelte';

export default [
    ...eslintSvelte.configs['flat/recommended'],
    // put any other plugins here
    ...eslintConfig,
]
```

### Mocha Support

Check out [`eslint-plugin-mocha`](https://www.npmjs.com/package/eslint-plugin-mocha) for more details. You can use the `flat.recommended` config in your eslint
config.

## Contributing & Development

This monorepo uses `changesets` to manage changes to all the config packages and for publishing packages.
Check out the [changesets repo](https://github.com/changesets/changesets) for specific details. However, the basics
are to run `npx changeset` when you are finished with a PR and it will prompt you to select a version increment (major, minor or patch)
and to write some changenotes. Then when your PR is merged, a PR will be created to update the release notes and publish the new version
of the package automatically. When we are ready to make the release we can merge that release PR.


## References & More Reading

- [Eslint config reference](https://eslint.org/docs/latest/use/configure/)
- [Prettier config reference](https://prettier.io/docs/en/configuration)
- Eslint plugins
    - [`eslint-plugin-svelte`](https://github.com/sveltejs/eslint-plugin-svelte)
    - [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
    - [`typescript-eslint`](https://typescript-eslint.io/packages/typescript-eslint/#config)
    - [`eslint-plugin-mocha`](https://www.npmjs.com/package/eslint-plugin-mocha) 
- Prettier plugins
    - [`prettier-plugin-svelte`](https://github.com/sveltejs/prettier-plugin-svelte)
