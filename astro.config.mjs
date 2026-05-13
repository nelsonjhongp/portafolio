import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const defaultBase =
  repository && owner && repository !== `${owner}.github.io` ? `/${repository}/` : "/";
const base = process.env.PUBLIC_BASE_PATH || defaultBase;

export default defineConfig({
  site: "https://nelsonjhongp.github.io",
  base,
  output: "static"
});
