import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, join } from "node:path";

const root = resolve("dist");
const base = "/portafolio/";
const origin = "https://nelsonjhongp.github.io";
const pages = ["index.html", "proyectos/ripnel/index.html"];
for (const page of pages) {
  const html = readFileSync(join(root, page), "utf8");
  const route = page === "index.html" ? base : `${base}proyectos/ripnel/`;
  assert(html.includes(`rel="canonical" href="${origin}${route}"`), `${page}: canonical`);
  assert(html.includes('id="main-content"'), `${page}: skip link destination`);
  assert(!html.includes("https://github.com/nelsonjhongp/ripnel-platform"), "Obsolete RIPNEL repository link");
  for (const match of html.matchAll(/\b(?:src|href)="([^"#]+)"/g)) {
    const url = match[1].replaceAll("&amp;", "&");
    if (/^(?:https?:|mailto:|data:)/.test(url)) continue;
    assert(url.startsWith(base), `${page}: URL outside base: ${url}`);
    const target = decodeURIComponent(url.slice(base.length).split(/[?#]/)[0]);
    if (!target) continue;
    const file = join(root, target);
    assert(existsSync(file), `${page}: missing ${target}`);
  }
  for (const match of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const candidate of match[1].split(",")) {
      const url = candidate.trim().split(/\s+/)[0];
      assert(url.startsWith(base) && existsSync(join(root, url.slice(base.length))), `${page}: missing srcset ${url}`);
    }
  }
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const value = match[1].replaceAll("&amp;", "&");
    if (!value.startsWith("#") && !value.startsWith(base)) continue;
    const url = new URL(value, `${origin}${route}`);
    if (!url.hash) continue;
    const target = url.pathname.slice(base.length);
    const destination = join(root, target, "index.html");
    const targetHtml = readFileSync(destination, "utf8");
    assert(targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${page}: missing anchor ${value}`);
  }
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, `${page}: one h1`);
}
const detail = readFileSync(join(root, pages[1]), "utf8");
for (const id of ["contexto", "aporte", "producto", "arquitectura", "decisiones", "calidad", "case-contact"]) {
  assert(detail.includes(`id="${id}"`), `Missing section ${id}`);
}
assert(detail.includes(`${base}og/ripnel-og.png`), "Dedicated social preview");
assert(detail.includes('fetchpriority="high"'), "Hero image priority");
assert(!readdirSync(join(root, "projects")).some(file => file.startsWith("ripnel-")), "Obsolete exported RIPNEL images");
console.log("PASS: homepage, RIPNEL case, base, canonical, local assets and responsive images");
