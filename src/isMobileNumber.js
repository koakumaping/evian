/**
* 判断是否是手机号码
*
* 用于判断是否是手机号码
*
* @returns true  是手机号码
* @returns false 不是手机号码
*
* @date 2017-12-19
* @author Ping YF (koakumaping@163.com)
*/

const isMobileNumber = (val) => {
  const reg = /^1[0-9]{10}$/
  return reg.test(val)
}

export default isMobileNumber