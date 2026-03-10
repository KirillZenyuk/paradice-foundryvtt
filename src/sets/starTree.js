import { MODULE_PATH, CATEGORY } from '../shared/constants.js'
import { buildIconDice } from '../shared/factory.js'

const ICON = `${MODULE_PATH}/graphics/icons/paradice-star-tree-colored.png`

export const starTreeSet = {
  id: 'paradice-star-tree',
  name: 'ParaDice — Star Tree',
  texture: {
    id: 'space',
    name: 'Space',
    composite: 'multiply',
    source: `${MODULE_PATH}/graphics/space.png`,
    bump: `${MODULE_PATH}/graphics/space.png`,
  },
  colorset: {
    name: 'Star Tree colors',
    description: 'Star Tree colors',
    category: CATEGORY,
    background: '#7b4bd2',
    foreground: '#5ce6e3',
    outline: '#2c0476',
    edge: '#2c0476',
    texture: 'space',
    material: 'glass',
    fontScale: {
      d100: 0.7,
      d20: 1.1,
      d12: 1.8,
      d10: 0.6,
      d8: 0.8,
      d6: 2.3,
      d4: 1.0,
      d2: 1.3,
    },
    font: 'MedievalSharp',
  },
  dice: buildIconDice({ system: 'paradice-star-tree', icon: ICON }),
}
