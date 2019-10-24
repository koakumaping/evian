/**
* 判断是否是空
*
* 用于判断当前输入是否是空
*
* @returns true  是空
* @returns false 不是空
*
* @date 2018-02-06
* @author Ping YF (koakumaping@163.com)
*/
import isString from './isString'
import isObject from './isObject'
import isArray from './isArray'
import isNumber from './isNumber'
import isEmptyObject from './isEmptyObject'

const isEmpty = (payload) => {
  if (payload === undefined || payload === null) return true
  if (isArray(payload) && payload.length === 0) return true
  if (isObject(payload) && isEmptyObject(payload)) return true
  if (isString(payload) && !payload) return true
  // 数字肯定不是空
  if (isNumber(payload)) return false
  return false
}

export default isEmpty