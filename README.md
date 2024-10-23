# 🧦👒 Clear style

Monorepo storing configuration packages for checking, formatting and enforcing clear code style.

## Quick Start

To quickly get setup on a new project, add the package that matches the framework you are using.

<hr />    

<img align="right" style="float: right; width: 100px; padding-top: 150px;" src="https://github.com/user-attachments/assets/3de25dd6-dc5b-461b-b74c-afa3f4f6c44b" />

### Vanilla

For setups that don't use any frameworks requiring special syntax or features. Has support for both esm/cjs and javascript/typescript.

<br clear="both"/>

First install `@clear/style`.

```bash
pnpm install @clear/style
```

Then add it as your prettier configuration in your `package.json`

```json
{
    "prettier": "@clear/style/prettier",
}
```

Then create an eslint.config.mjs file that pulls in the config.

```js
import config from "@clear/style/eslint/ts";

export default config;
```

> [!NOTE]
> If using `clear-style` in a common js project or a project without typescript, you should instead create a `eslint.config.cjs` file and
> import the config from `@clear/style/eslint/js` instead.

<hr />

<img align="right" style="float: right; width: 100px; padding-top: 150px;" src="https://github.com/user-attachments/assets/7e11ae19-9481-49a8-b47b-fd85d0c11430" />

### Svelte

For use with svelte/sveltekit framework. Automatically includes svelte parsing, formatting and linting using the official plugins for each.

<br clear="both"/>

First install `@clear/style-svelte`.

```bash
pnpm install @clear/style-svelte
```

Then add it as your prettier configuration in your `package.json`

```json
{
    "prettier": "@clear/style-svelte/prettier",
}
```

Then create an eslint.config.mjs file that pulls in the config.

```js
import config from "@clear/style-svelte/eslint"; // NOTE: does not require /ts path

export default config;
```

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
