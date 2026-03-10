export async function registerSet(dice3d, config) {
  dice3d.addSystem({ id: config.id, name: config.name }, false)

  if (config.texture) {
    await dice3d.addTexture(
      config.texture.id,
      config.texture,
    )
  }

  if (config.colorset) {
    dice3d.addColorset(config.colorset, config.colorsetMode ?? 'no')
  }

  for (const die of config.dice) {
    dice3d.addDicePreset(
      {
        type: die.type,
        labels: die.labels,
        system: config.id,
        ...(die.font && { font: die.font }),
        ...(die.fontScale && { fontScale: die.fontScale }),
      },
      die.shape,
    )
  }
}
