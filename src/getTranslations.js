// lib/getTranslation.js
import fs from "fs/promises";
import path from "path";

// Minimal example of reading a JSON file from /public/locales/<locale>/<namespace>.json
export async function getTranslation(locale, namespace) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "locales",
    locale,
    `${namespace}.json`
  );
  const contents = await fs.readFile(filePath, "utf8");
  return JSON.parse(contents);
}
