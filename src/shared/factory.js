import { D100_LABELS } from './constants.js'

const NUMERIC_LABELS = {
  d20: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
  d12: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  d10: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  d8: ['1', '2', '3', '4', '5', '6', '7'],
  d6: ['1', '2', '3', '4', '5'],
  d4: ['1', '2', '3', '4'],
  d2: ['1'],
  df: ['1', ''],
  d100: D100_LABELS,
}

const DEFAULT_SHAPES = {
  d20: 'd20',
  df: 'df',
  d4: 'd4',
  d6: 'd6',
  d8: 'd8',
  d10: 'd10',
  d12: 'd12',
  d100: 'd10',
}

export function iconLabels(type, icon) {
  if (type === 'd4' || type === 'd100') return NUMERIC_LABELS[type]
  return [...NUMERIC_LABELS[type], icon]
}

export function buildIconDice({ system, icon, font, perDie = {} }) {
  return ['d20', 'd2', 'df', 'd4', 'd6', 'd8', 'd10', 'd12', 'd100'].map((type) => {
    const overrides = perDie[type] ?? {}

    return {
      type,
      shape: overrides.shape ?? DEFAULT_SHAPES[type],
      labels: overrides.labels ?? iconLabels(type, icon),
      system,
      ...(type !== 'd4' && type !== 'd100' && font ? { font } : {}),
      ...(type === 'df' ? { fontScale: 1.3 } : {}),
      ...overrides,
    }
  })
}
