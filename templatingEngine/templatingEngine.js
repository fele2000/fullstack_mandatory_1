import fs from "fs";
import { sanitizeXSS } from "../public/assets/js/escapeHTML.js";

export function constructPage(page, options = {}) {
  const header = readPage("public/components/header/header.html");
  const footer = readPage("public/components/footer/footer.html");
  const sanitizedPage = sanitizePage(page);

  return (
    header
      .replace("{{CSS_LINKS}}", options.cssLinks || "")
      .replace("{{JS_LINKS}}", options.jsLinks || "")
      .replace("{{TAB_TITLE}}", options.tabTitle || "Mandatory")
      .replace("{{SITE_NAME}}", "Mandatory 1")
      .replace(
        `href="${options.activePath}">`,
        `href="${options.activePath}" aria-current="page">`,
      ) +
    createIndholdsfortegnelse(sanitizedPage) +
    sanitizedPage +
    footer
  );
}

//Fundet online
function sanitizePage(page) {
  return page.replace(
    /<pre><code>([\s\S]*?)<\/code><\/pre>/g,
    (match, code) => `<pre><code>${sanitizeXSS(code)}</code></pre>`,
  );
}

export function readPage(path) {
  return fs.readFileSync(path, "utf-8");
}

// Stjålet delvist fra internettet
function createIndholdsfortegnelse(page) {
  const headings = page.matchAll(/<h2 id="(.+?)">/g);
  let links = "";

  for (const [, id] of headings) {
    links += `<a href="#${id}">${id.replaceAll("-", " ")}</a>`;
  }

  return `<aside class="indholdsfortegnelse"><p>Indholdsfortegnelse</p>${links}</aside>`;
}
