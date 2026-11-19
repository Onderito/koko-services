// Writes src/app/data/image-sizes.ts: the width and height of every picture under public/assets, read with sharp.
// Run it after adding or replacing a picture: node scripts/image-sizes.mjs
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import sharp from "sharp";

const root = "public";
const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(webp|jpe?g|png|avif)$/i.test(name)) files.push(path);
  }
})(join(root, "assets"));

const lines = [];
for (const file of files.sort()) {
  const { width, height } = await sharp(file).metadata();
  if (width && height) lines.push(`  ${JSON.stringify("/" + relative(root, file).split(sep).join("/"))}: [${width}, ${height}],`);
}

writeFileSync(
  "src/app/data/image-sizes.ts",
  `// Width and height of each picture under public/assets, written by scripts/image-sizes.mjs.\n` +
    `export const IMAGE_SIZE: Record<string, [number, number]> = {\n${lines.join("\n")}\n};\n`,
);
console.log(`${lines.length} pictures written to src/app/data/image-sizes.ts`);
