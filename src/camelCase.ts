const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

const camelCase = (name: any) => name.replace(SPECIAL_CHARS_REGEXP,
  (_: string, separator: string, letter: string, offset: string) => offset ? letter.toUpperCase() : letter)
  .replace(MOZ_HACK_REGEXP, 'Moz$1')

export default camelCase