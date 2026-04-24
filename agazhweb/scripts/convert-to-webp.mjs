/**
 * Convert all JPEG/PNG images in public/images/ and src/Images/ to WebP format.
 * Keeps originals intact and creates .webp copies alongside them.
 * Run: node scripts/convert-to-webp.mjs
 */
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const DIRS = [
  join(ROOT, 'public', 'images'),
  join(ROOT, 'src', 'Images'),
];

const SUPPORTED = ['.jpeg', '.jpg', '.png'];

async function convertDir(dir) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    console.log(`⏭  Skipping missing directory: ${dir}`);
    return;
  }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!SUPPORTED.includes(ext)) continue;

    const inputPath = join(dir, file);
    const outputPath = join(dir, basename(file, extname(file)) + '.webp');

    try {
      const info = await stat(outputPath).catch(() => null);
      if (info) {
        console.log(`⏭  Already exists: ${basename(outputPath)}`);
        continue;
      }

      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      const origSize = (await stat(inputPath)).size;
      const newSize = (await stat(outputPath)).size;
      const savings = ((1 - newSize / origSize) * 100).toFixed(1);

      console.log(`✅ ${basename(file)} → ${basename(outputPath)}  (${savings}% smaller)`);
    } catch (err) {
      console.error(`❌ Failed: ${file} — ${err.message}`);
    }
  }
}

console.log('🖼️  Converting images to WebP...\n');
for (const dir of DIRS) {
  console.log(`📂 ${dir}`);
  await convertDir(dir);
  console.log('');
}
console.log('✨ Done!');
