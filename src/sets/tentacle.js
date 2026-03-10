import { MODULE_PATH, CATEGORY } from '../shared/constants.js'
import { buildIconDice } from '../shared/factory.js'

const ICON = `${MODULE_PATH}/graphics/icons/paradice-tentacle-colored.png`

export const tentacleSet = {
  id: 'paradice-tentacle',
  name: 'ParaDice — Tentacle',
  texture: {
    id: 'ametyst',
    name: 'Ametyst',
    composite: 'multiply',
    source: `${MODULE_PATH}/graphics/ametyst.png`,
    bump: `${MODULE_PATH}/graphics/ametyst.png`,
  },
  colorset: {
    name: 'Tentacle colors',
    description: 'Tentacle colors',
    category: CATEGORY,
    background: '#945da8',
    foreground: '#e5961f',
    outline: '#b87614',
    edge: '#6b3380',
    texture: 'ametyst',
    material: 'glass',
    fontScale: {
      d100: 0.7,
      d20: 1.1,
      d12: 1.8,
      d10: 0.8,
      d8: 1.0,
      d6: 2.3,
      d4: 1.0,
      d2: 1.3,
    },
    font: 'Are You Serious',
  },
  dice: buildIconDice({ system: 'paradice-tentacle', icon: ICON }),
}
