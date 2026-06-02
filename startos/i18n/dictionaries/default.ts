export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting Umbrel UI.': 0,
  'Web Interface': 1,
  'The web interface is ready': 2,
  'The web interface is not ready': 3,

  // interfaces.ts
  'Web UI': 4,
  'The web interface of the Umbrel UI': 5,

  // dependencies.ts
  'Umbrel Bitcoin UI requires ZMQ for live block and transaction updates.': 6,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
