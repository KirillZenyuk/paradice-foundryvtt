import { MODULE_PATH, CATEGORY } from '../shared/constants.js'
import { buildImageIconDice } from '../shared/factory.js'

const ICON = `${MODULE_PATH}/graphics/icons/horned-hammer-colored.png`

export const hornedHammerSet = {
  id: 'paradice-horned-hammer',
  name: 'ParaDice — Horned Hammer',
  texture: {
    id: 'dark-marble',
    name: 'Dark Marble',
    source: `${MODULE_PATH}/graphics/textures/marble.png`,
  },
  colorset: {
    name: 'Horned Hammer colors',
    description: 'Horned Hammer colors',
    category: CATEGORY,
    background: '#757575',
    foreground: '#996515',
    outline: '#8A5B13',
    edge: '#CCB28A',
    texture: 'dark-marble',
    material: 'glass',
    fontScale: {
      d100: 1.0,
      d20: 1.2,
      d12: 1.6,
      d10: 1.2,
      d8: 1.2,
      d6: 2.0,
      d4: 0.8,
      d2: 2.0,
    },
    font: 'Arizonia',
  },
  dice: buildImageIconDice({ system: 'paradice-horned-hammer', icon: ICON }),
}
