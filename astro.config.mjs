import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://pipiyu1037.github.io",
  output: "static",
  trailingSlash: "always",
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
      wrap: true,
    },
  },
});
