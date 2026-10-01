import fs from 'fs';
import path from 'path';
import convert from 'heic-convert';

const dirs = [
  path.resolve('public/img/Adere'),
  path.resolve('public/img/Irialmag'),
  path.resolve('public/img/Supriled'),
];

async function run() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.heic'));
    console.log(`Processing ${files.length} HEIC files in ${dir}...`);
    for (const file of files) {
      const inputPath = path.join(dir, file);
      const baseName = file.replace(/\.heic$/i, '');
      const outputPath = path.join(dir, `${baseName}.jpg`);
      
      if (fs.existsSync(outputPath)) {
        console.log(`Already exists: ${outputPath}`);
        continue;
      }

      console.log(`Converting ${file} -> ${baseName}.jpg...`);
      const inputBuffer = fs.readFileSync(inputPath);
      const outputBuffer = await convert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.88,
      });

      fs.writeFileSync(outputPath, Buffer.from(outputBuffer));
      console.log(`Converted: ${baseName}.jpg (${outputBuffer.length} bytes)`);
    }
  }
  console.log('All conversions completed successfully!');
}

run().catch(err => {
  console.error('Error during conversion:', err);
  process.exit(1);
});
