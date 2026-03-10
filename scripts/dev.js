import fs from 'node:fs'
import path from 'node:path'
import fse from 'fs-extra'

const root = process.cwd()
const foundryModulesPath = path.resolve('C:/Users/Anessy/AppData/Local/FoundryVTT/Data/modules',)

const targetDir = path.join(foundryModulesPath, 'paradice')

await fse.ensureDir(targetDir)

const filesToCopy = ['module.json', 'style.css']
const dirsToCopy = ['dist', 'graphics', 'fonts']

for (const file of filesToCopy) {
  const src = path.join(root, file)
  if (fs.existsSync(src)) {
    await fse.copy(src, path.join(targetDir, file), { overwrite: true })
  }
}

for (const dir of dirsToCopy) {
  const src = path.join(root, dir)
  if (fs.existsSync(src)) {
    await fse.copy(src, path.join(targetDir, dir), { overwrite: true })
  }
}

console.log(`Synced to ${targetDir}`)
