import randomString from './randomString'
import toNumber from './toNumber'
import array2object from './array2object'
import isArray from './isArray'
import isObject from './isObject'
import isNumber from './isNumber'

const formatDictionaries = (dictionaries = []) => {
  const dicts = array2object(dictionaries)
  const _dicts = {}

  const handleItem = (item) => {
    const _item = {}
    _item.key = randomString(12, true)
    _item.label = item.txt
    const _val = item.Id || item.val
    _item.value = isNumber(_val) ? toNumber(_val) : _val
    const parentId = item.ParentId || item.parentId
    _item.parentId = !parentId ? '' : isNumber(parentId) ?
      toNumber(parentId) : parentId
    _item.disabled = !!toNumber(item.readonly)
    return _item
  }

  for (const key in dicts) {
    const _arr = []
    if (isArray(dicts[key])) {
      dicts[key].forEach((item) => {
        if (isObject(item) && item.txt) {
          _arr.push(handleItem(item))
        }
      })
      _dicts[key] = _arr
    } else if (isObject(dicts[key])) {
      _dicts[key] = dicts[key]

      for (const childKey in dicts[key]) {
        const _childArr = []
        _dicts[key][childKey].forEach((childItem) => {
          _childArr.push(handleItem(childItem))
        })
        _dicts[key][childKey] = _childArr
      }
    }
  }
  return _dicts
}

export default formatDictionaries