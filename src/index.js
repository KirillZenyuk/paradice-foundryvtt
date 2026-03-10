import { registerSet } from './shared/register.js'
import { alienSet } from './sets/alien.js'
import { archfeySet } from './sets/archfey.js'
import { dragonSet } from './sets/dragon.js'
import { gameMasterSet } from './sets/gameMaster.js'
import { hornedHammerSet } from './sets/hornedHammer.js'
import { starTreeSet } from './sets/starTree.js'
import { tentacleSet } from './sets/tentacle.js'
import { tridentSet } from './sets/trident.js'
import { waterElementSet } from './sets/waterElement.js'

const sets = [
  archfeySet,
  alienSet,
  dragonSet,
  gameMasterSet,
  hornedHammerSet,
  starTreeSet,
  tentacleSet,
  tridentSet,
  waterElementSet,
]

Hooks.on('diceSoNiceReady', async (dice3d) => {
  for (const set of sets) {
    await registerSet(dice3d, set)
  }
})
