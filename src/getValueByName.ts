import hasOwn from './hasOwn'

function getValueByName(obj: Record<string, any>, name: string) {
  if (hasOwn(obj, name)) {
    return obj[name]
  }
  return ''
}

export default getValueByName