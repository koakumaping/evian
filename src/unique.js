/**
* 数组去重
*
* 用于数组去重, 只能用于简单的数组
*
* @returns new Array
*
* @date 2018-02-06
* @author Ping YF (koakumaping@163.com)
*/
import isArray from './isArray'

const unique = (arr) => {
  if (isArray(arr)) return Array.from(new Set(arr))
  return []
}

export default unique