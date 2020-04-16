/**
* 字符转换成数组
*
* 用于字符转换成数组
*
* @returns Array
*
* @date 2020-04-16
* @author Ping YF (koakumaping@163.com)
*/
import isNumber from './isNumber'
import toNumber from './toNumber'

const string2array = (str = '', dot = ',') => {
  let arr = []
  if (!str) return arr
  if (isNumber(str)) {
    return [str]
  }

  return str.split(dot).map(item => {
    if (isNumber(item)) return toNumber(item)
    return item
  })
}

export default string2array