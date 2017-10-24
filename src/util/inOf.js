/**
* 判断是否存在于另一个数组当中
*
* 用于判断是否存在于另一个数组当中
*
* @returns true  在
* @returns false 不在
*
* @date 2017-10-24
* @author Ping YF (koakumaping@163.com)
*/

const inOf = (arr, targetArr) => {
  let res = true
  arr.forEach((item) => {
    if (targetArr.indexOf(item) < 0) {
      res = false
    }
  })
  return res
}

export default inOf