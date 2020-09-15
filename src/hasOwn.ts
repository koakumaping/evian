function hasOwn(obj: Record<string, any>, key: string | number): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export default hasOwn