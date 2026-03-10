import { MODULE_PATH, CATEGORY } from '../shared/constants.js'
import { buildIconDice } from '../shared/factory.js'

const ICON = `${MODULE_PATH}/graphics/icons/paradice-trident-colored.png`

export const tridentSet = {
  id: 'paradice-trident',
  name: 'ParaDice — Trident',
  texture: {
    id: 'deep-water',
    name: 'Deep Water',
    composite: 'multiply',
    source: `${MODULE_PATH}/graphics/water.png`,
    bump: `${MODULE_PATH}/graphics/water.png`,
  },
  colorset: {
    name: 'Trident colors',
    description: 'Trident colors',
    category: CATEGORY,
    background: '#1E88E5',
    foreground: '#FFEA00',
    outline: '#FFD600',
    edge: '#FFD600',
    texture: 'deep-water',
    material: 'metal',
    fontScale: {
      d100: 0.7,
      d20: 0.8,
      d12: 1.1,
      d10: 0.8,
      d8: 0.9,
      d6: 1.3,
      d4: 0.7,
      d2: 1.3,
    },
    font: 'Pinyon Script',
  },
  dice: buildIconDice({ system: 'paradice-trident', icon: ICON }),
}
