const NUMERIC_LABELS = {
  d20: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
  d12: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  d10: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  d8: ['1', '2', '3', '4', '5', '6', '7'],
  d6: ['1', '2', '3', '4', '5'],
  d4: ['1', '2', '3', '4'],
  d2: ['1'],
  df: ['-', ' ', '+'],
  d100: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
}

const DEFAULT_SHAPES = {
  d20: 'd20',
  d12: 'd12',
  d10: 'd10',
  d8: 'd8',
  d6: 'd6',
  d4: 'd4',
  d2: 'd2',
  df: 'df',
  d100: 'd10',
}

const IMAGE_ICON_TYPES = new Set(['d20', 'd12', 'd10', 'd8', 'd6', 'd2'])
const GLYPH_ICON_TYPES = new Set(['d20', 'd12', 'd10', 'd8', 'd6', 'd2'])

export function buildImageIconDice({ system, icon, perDie = {} }) {
  return ['d20', 'd2', 'df', 'd4', 'd6', 'd8', 'd10', 'd12', 'd100'].map((type) => {
    const overrides = perDie[type] ?? {}
    const useIcon = IMAGE_ICON_TYPES.has(type)

    return {
      type,
      shape: overrides.shape ?? DEFAULT_SHAPES[type],
      labels: overrides.labels ?? (useIcon ? [...NUMERIC_LABELS[type], icon] : NUMERIC_LABELS[type]),
      ...overrides,
    }
  })
}

export function buildGlyphIconDice({ system, icon, font, perDie = {} }) {
  return ['d20', 'd2', 'df', 'd4', 'd6', 'd8', 'd10', 'd12', 'd100'].map((type) => {
    const overrides = perDie[type] ?? {}
    const useIcon = GLYPH_ICON_TYPES.has(type)

    return {
      type,
      shape: overrides.shape ?? DEFAULT_SHAPES[type],
      labels: overrides.labels ?? (useIcon ? [...NUMERIC_LABELS[type], icon] : NUMERIC_LABELS[type]),
      ...(font && type !== 'd4' && type !== 'd100' ? { font } : {}),
      ...overrides,
    }
  })
}
