import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const basePath = process.cwd();

const imagesToConvert = [
  { src: 'public/images/hero/hero-banner-warm.png', dest: 'public/images/hero/hero-banner-warm.webp' },
  { src: 'public/images/team/placeholder-member.png', dest: 'public/images/team/placeholder-member.webp' },
  { src: 'public/images/fullcircle-logo.png', dest: 'public/images/fullcircle-logo.webp' }
];

async function convert() {
  for (const { src, dest } of imagesToConvert) {
    const srcPath = path.join(basePath, src);
    const destPath = path.join(basePath, dest);
    
    if (fs.existsSync(srcPath)) {
      console.log(`Converting ${src}...`);
      await sharp(srcPath).webp({ quality: 80 }).toFile(destPath);
      console.log(`Created ${dest}`);
      // Remove original
      fs.unlinkSync(srcPath);
      console.log(`Deleted original ${src}`);
    } else {
      console.log(`Source not found: ${srcPath}`);
    }
  }
}

convert().catch(console.error);
