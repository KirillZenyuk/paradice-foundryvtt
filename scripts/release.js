import fs from 'node:fs'
import path from 'node:path'
import archiver from 'archiver'
import fse from 'fs-extra'

const root = process.cwd()
const releaseRoot = path.join(root, '.release')
const packageDir = path.join(releaseRoot, 'package')
const zipPath = path.join(releaseRoot, 'paradice-foundryvtt.zip')

await fse.remove(releaseRoot)
await fse.ensureDir(packageDir)

const filesToCopy = [
  'module.json',
  'style.css',
]

const dirsToCopy = [
  'dist',
  'graphics',
  'fonts',
]

for (const file of filesToCopy) {
  const src = path.join(root, file)
  if (fs.existsSync(src)) {
    await fse.copy(src, path.join(packageDir, file))
  }
}

for (const dir of dirsToCopy) {
  const src = path.join(root, dir)
  if (fs.existsSync(src)) {
    await fse.copy(src, path.join(packageDir, dir))
  }
}

await new Promise((resolve, reject) => {
  const output = fs.createWriteStream(zipPath)
  const archive = archiver('zip', { zlib: { level: 9 } })

  output.on('close', resolve)
  archive.on('error', reject)

  archive.pipe(output)
  archive.directory(packageDir, false)
  archive.finalize()
})

console.log(`Created release zip: ${zipPath}`)
