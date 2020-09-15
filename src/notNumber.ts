/**
* 判断是否不是数字
*
* 用于判断当前输入是否不是数字
*
* @returns true  不是数字
* @returns false 是数字
*
* @date 2019-12-11
* @author Ping YF (koakumaping@163.com)
*/
import isNumber from './isNumber'

const notNumber = (val) => {
  return !isNumber(val)
}

export default notNumber