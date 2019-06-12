/**
* 查找Array中符合条件的元素
*
* @returns any
*
* @date 2019-06-11
* @author Ping YF (koakumaping@163.com)
*/
import arrayFindIndex from './arrayFindIndex'

const arrayFind = (arr, pred) => {
  const idx = arrayFindIndex(arr, pred)
  return idx !== -1 ? arr[idx] : undefined
}

export default arrayFind