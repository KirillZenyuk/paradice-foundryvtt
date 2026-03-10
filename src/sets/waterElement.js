import { MODULE_PATH, CATEGORY } from '../shared/constants.js'
import { buildIconDice } from '../shared/factory.js'

const ICON = `${MODULE_PATH}/graphics/icons/water-element.png`

export const waterElementSet = {
  id: 'paradice-we',
  name: 'ParaDice — Water Element',
  texture: {
    id: 'water-element',
    name: 'Water Element',
    composite: 'multiply',
    source: `${MODULE_PATH}/graphics/ice.png`,
    bump: `${MODULE_PATH}/graphics/ice.png`,
  },
  colorset: {
    name: 'Water Element colors',
    description: 'Water Element colors',
    category: CATEGORY,
    background: '#15acc6',
    foreground: '#000000',
    outline: '#000000',
    edge: '#1fd1ce',
    texture: 'water-element',
    material: 'glass',
    fontScale: {
      d100: 0.8,
      d20: 0.8,
      d12: 1.2,
      d10: 0.8,
      d8: 0.8,
      d6: 1.5,
      d4: 0.8,
      d2: 1.2,
    },
    font: 'Are You Serious',
  },
  dice: buildIconDice({ system: 'paradice-we', icon: ICON }),
}
