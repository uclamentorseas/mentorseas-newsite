import sharp from "sharp";
import { readFile, writeFile, rename } from "node:fs/promises";
import { existsSync } from "node:fs";

const SRC = "public/Royce_Hall.jpg";
const BACKUP = "public/Royce_Hall.original.jpg";

const original = await readFile(SRC);

if (!existsSync(BACKUP)) {
  await writeFile(BACKUP, original);
  console.log(`Backed up original → ${BACKUP}`);
}

// 1) Resize + re-encode the served image.
// 1920px wide covers desktop retina at typical hero sizes; Next/Image will
// downscale further for smaller viewports via its responsive pipeline.
const resized = await sharp(original)
  .resize({ width: 1920, withoutEnlargement: true })
  .jpeg({ quality: 78, mozjpeg: true })
  .toBuffer();

await writeFile(SRC, resized);

// 2) Generate a tiny base64 LQIP for placeholder="blur".
// 16px wide is the sweet spot — small enough that the data URL stays short
// (~1KB), big enough to feel like the real photo.
const lqip = await sharp(original)
  .resize({ width: 16 })
  .jpeg({ quality: 50 })
  .toBuffer();

const dataUrl = `data:image/jpeg;base64,${lqip.toString("base64")}`;

const beforeKB = (original.length / 1024).toFixed(0);
const afterKB = (resized.length / 1024).toFixed(0);
console.log(`Resized: ${beforeKB}KB → ${afterKB}KB`);
console.log(`\nblurDataURL (paste into hero.tsx):\n${dataUrl}`);
