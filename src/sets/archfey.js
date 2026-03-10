import { MODULE_PATH, CATEGORY } from '../shared/constants.js'
import { buildImageIconDice } from '../shared/factory.js'

const ICON = `${MODULE_PATH}/graphics/icons/archfey-colored.png`

export const archfeySet = {
  id: 'paradice-archfey',
  name: 'ParaDice — Archfey',
  texture: {
    id: 'quartz',
    name: 'Quartz',
    composite: 'source-over',
    source: `${MODULE_PATH}/graphics/textures/quartz.png`,
  },
  colorset: {
    name: 'Archfey colors',
    description: 'Archfey colors',
    category: CATEGORY,
    background: '#f7cac9',
    foreground: '#9d2f5b',
    outline: '#7c1852',
    edge: '#d2adac',
    texture: 'quartz',
    material: 'glass',
    fontScale: {
      d100: 0.7,
      d20: 1.0,
      d12: 1.4,
      d10: 0.7,
      d8: 1.0,
      d6: 1.8,
      d4: 0.9,
      d2: 1.3,
    },
    font: 'Pinyon Script',
  },
  dice: buildImageIconDice({ system: 'paradice-archfey', icon: ICON }),
}
