import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const IMAGES_DIR = './public/images';
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await fs.readdir(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = await fs.stat(fullPath);

    if (stat.isDirectory()) {
      await getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  }

  return arrayOfFiles;
}

async function optimizeImages() {
  console.log('🚀 Starting image optimization...');

  try {
    const files = await getAllFiles(IMAGES_DIR);
    const imageExtensions = ['.png', '.jpg', '.jpeg'];

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!imageExtensions.includes(ext)) continue;

      const outputPath = file.replace(ext, '.webp');
      
      console.log(`Processing: ${file}`);
      
      const image = sharp(file);
      const metadata = await image.metadata();

      let pipeline = image;
      
      // Resize if wider than MAX_WIDTH
      if (metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH);
      }

      // Convert to webp with quality settings
      await pipeline
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const oldSize = (await fs.stat(file)).size;
      const newSize = (await fs.stat(outputPath)).size;
      
      console.log(`  ✅ Optimized: ${path.basename(outputPath)} (${(oldSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB)`);

      // Delete original file
      await fs.unlink(file);
      console.log(`  🗑️ Deleted original: ${path.basename(file)}`);
    }

    console.log('\n✨ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

optimizeImages();
