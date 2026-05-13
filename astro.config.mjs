import { defineConfig } from "astro/config";

const base = process.env.PUBLIC_BASE_PATH || "/";

export default defineConfig({
  site: "https://nelsonjhongp.github.io",
  base,
  output: "static"
});

