/**
 * 扁平化数组
 *
 * 用于扁平化数组 [1 , [2, 3, [4]]] => [1, 2, 3, 4]
 *
 * @returns Array
 *
 * @date 2018-10-11
 * @author Ping YF (koakumaping@163.com)
 */
import isArray from './isArray'

const flattenify = (array = []) =>
  array.reduce((pre, cur) => {
    if (isArray(cur)) return [...pre, ...flattenify(cur)]
    return [...pre, cur]
  }, [])

export default flattenify