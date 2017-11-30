/**
* 判断是否是Boolean
*
* 用于判断当前输入是否是Boolean
*
* @returns true  是Boolean
* @returns false 不是Boolean
*
* @date 2017-11-28
* @author Ping YF (koakumaping@163.com)
*/

const isBoolean = (val) => Object.prototype.toString.call(val) === '[object Boolean]'

export default isBoolean