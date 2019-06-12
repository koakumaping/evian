/**
* 查找Array中符合条件的元素
*
* @returns Nummber
*
* @date 2019-06-11
* @author Ping YF (koakumaping@163.com)
*/

const arrayFindIndex = (arr, pred) => {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i
    }
  }
  return -1
}

export default arrayFindIndex