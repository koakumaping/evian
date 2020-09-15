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

const isEmptyObject = (obj: Record<string, any>) => {
  if (Object.keys(obj).length === 0) {
    return true
  }
  return false
}

export default isEmptyObject