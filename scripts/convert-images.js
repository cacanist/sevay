// Simple PNG/JPG to WebP converter for hero images
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

async function convertToWebp(inputPath, outputPath, quality = 75) {
  const buffer = await fs.promises.readFile(inputPath)
  const webpBuffer = await sharp(buffer).webp({ quality }).toBuffer()
  await fs.promises.writeFile(outputPath, webpBuffer)
}

async function run() {
  const publicDir = path.resolve(__dirname, '..', 'public')
  const images = [
    'happy-children-classroom.png',
    'about-us-education-center.png',
    'children-learning-activities.png',
  ]

  for (const file of images) {
    const srcPath = path.join(publicDir, file)
    const destPath = path.join(publicDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'))
    try {
      if (!fs.existsSync(srcPath)) {
        console.warn(`[skip] Source not found: ${srcPath}`)
        continue
      }
      await convertToWebp(srcPath, destPath, 75)
      console.log(`[ok] ${path.basename(srcPath)} → ${path.basename(destPath)}`)
    } catch (err) {
      console.error(`[err] Failed for ${file}:`, err.message)
    }
  }
}

run()

