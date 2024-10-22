import basePrettierConfig from "@clear/prettier-config";

export default {
  ...basePrettierConfig,
  plugins: ["prettier-plugin-svelte"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
