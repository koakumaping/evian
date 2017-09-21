/**
* 从Array中获取特定名称的Object
*
* 用于从Array中获取特定名称的Object
*
* @returns Object
*
* @date 2017-09-21
* @author Ping YF (koakumaping@163.com)
*/
import hasOwn from './hasOwn'

const getObjectFromArray = (arr = [], name) => {
  for (let i = 0, l = arr.length; i < l; ++i) {
    if (hasOwn(arr[i], name)) {
      return arr[i][name]
    }
  }
  return ''
}

export default getObjectFromArray