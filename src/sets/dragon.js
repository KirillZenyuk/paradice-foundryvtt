import { MODULE_PATH, CATEGORY } from '../shared/constants.js'
import { buildIconDice } from '../shared/factory.js'

const ICON = `${MODULE_PATH}/graphics/icons/paradice-dragon-head-colored.png`

export const dragonSet = {
  id: 'paradice-dragon',
  name: 'ParaDice — Dragon',
  texture: {
    id: 'dragon-scale',
    name: 'Dragon Scale',
    composite: 'multiply',
    source: `${MODULE_PATH}/graphics/dragon-scale.png`,
    bump: `${MODULE_PATH}/graphics/dragon-scale.png`,
  },
  colorset: {
    name: 'Dragon colors',
    description: 'Dragon colors',
    category: CATEGORY,
    background: '#d1f6ff',
    foreground: '#053748',
    outline: '#000000',
    edge: '#6C484F',
    texture: 'dragon-scale',
    material: 'metal',
    fontScale: {
      d100: 1.2,
      d20: 1.3,
      d12: 1.8,
      d10: 1.2,
      d8: 1.2,
      d6: 2.0,
      d4: 1.0,
      d2: 1.6,
    },
    font: 'Red Dragons',
  },
  dice: buildIconDice({ system: 'paradice-dragon', icon: ICON }),
}
