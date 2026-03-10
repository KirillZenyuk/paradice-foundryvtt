import { buildIconDice } from '../shared/factory.js'

const ALIEN = '\uE001'

export const alienSet = {
  id: 'paradice-alien',
  name: 'ParaDice — Alien',
  dice: buildIconDice({
    system: 'paradice-alien',
    icon: ALIEN,
    font: 'ParadiceAlien',
    perDie: {
      d6: { fontScale: 1.4 },
    },
  }),
}
