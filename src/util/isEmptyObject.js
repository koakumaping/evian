/**
* 判断是否是空Object
*
* 用于判断当前输入是否是空Object
*
* @returns true  是空Object
* @returns false 不是空Object
*
* @date 2017-10-26
* @author Ping YF (koakumaping@163.com)
*/

const isEmptyObject = (obj) => {
  for (const key in obj) {
    return false
  }
  return true
}

export default isEmptyObject