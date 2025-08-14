// Convert all PNG/JPG/JPEG/SVG images in public/ to WebP
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
  const allowedExts = new Set(['.png', '.jpg', '.jpeg', '.svg'])
  const images = (await fs.promises.readdir(publicDir))
    .filter((file) => allowedExts.has(path.extname(file).toLowerCase()))

  for (const file of images) {
    const srcPath = path.join(publicDir, file)
    const destPath = path.join(publicDir, file.replace(/\.(png|jpg|jpeg|svg)$/i, '.webp'))
    try {
      if (!fs.existsSync(srcPath)) {
        console.warn(`[skip] Source not found: ${srcPath}`)
        continue
      }
      let shouldConvert = true
      try {
        const [srcStat, destStat] = [fs.statSync(srcPath), fs.statSync(destPath)]
        if (destStat.mtimeMs >= srcStat.mtimeMs) shouldConvert = false
      } catch (_) {}

      if (!shouldConvert) {
        console.log(`[skip] Up-to-date: ${path.basename(destPath)}`)
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

