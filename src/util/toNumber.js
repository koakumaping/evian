/**
* 把String装换成Number
* @param {String} str
*
* 用于把String装换成Number
*
* @returns Number
*
* @date 2017-10-26
* @author Ping YF (koakumaping@163.com)
*/

const toNumber = (str) => {
  let _num = str * 1
  if (isNaN(_num)) _num = ''
  return _num
}

export default toNumber