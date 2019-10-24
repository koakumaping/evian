/**
* 数组转换成对象
*
* 用于数组转换成对象
*
* @returns Object
*
* @date 2018-02-08
* @author Ping YF (koakumaping@163.com)
*/

// 先提取整数部分
const array2object = (arr = []) => {
  const l = arr.length
  const obj = {}
  for (let i = 0; i < l; ++i) {
    const child = arr[i]
    for (const key in child) {
      obj[key.toString()] = child[key]
    }
  }

  return obj
}

export default array2object