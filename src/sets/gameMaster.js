import { MODULE_PATH, CATEGORY } from '../shared/constants.js'
import { buildImageIconDice } from '../shared/factory.js'

const ICON = `${MODULE_PATH}/graphics/icons/game-master.png`

export const gameMasterSet = {
  id: 'paradice-gm',
  name: 'ParaDice — GameMaster1',
  texture: {
    id: 'old-parchment',
    name: 'Old Parchment',
    composite: 'multiply',
    source: `${MODULE_PATH}/graphics/textures/parchment.png`,
  },
  colorset: {
    name: 'GameMaster colors',
    description: 'GameMaster colors',
    category: CATEGORY,
    background: '#eab21a',
    foreground: '#000000',
    outline: '#000000',
    edge: '#976002',
    texture: 'old-parchment',
    material: 'wood',
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
    font: 'Pinyon Script',
  },
  dice: buildImageIconDice({
    system: 'paradice-gm',
    icon: ICON,
  }),
}
