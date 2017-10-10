/**
* 从response中获取特定的dict
*
* 用于从response中获取特定的dict
*
* @returns Array
*
* @date 2017-10-10
* @author Ping YF (koakumaping@163.com)
*/
import hasOwn from './hasOwn'
import isNumber from './isNumber'
import getObjectFromArray from './getObjectFromArray'

const getDict = (arr = [], name) => {
  const obj = getObjectFromArray(arr, name)

  const _arr = []
  for (const key in obj) {
    if (hasOwn(obj, key)) {
      const _obj = {
        label: obj[key],
        value: isNumber(key) ? Number(key) : key,
      }
      _arr.push(_obj)
    }
  }
  return _arr
}

export default getDict