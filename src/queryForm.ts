/**
* 用来复制$route.query，过滤掉空的
* @param query {Object}  要复制的要复制的query
*
* @return {Object}     返回一个过滤过的query
*/
import isEmpty from './isEmpty'
import isNumber from './isNumber'
import toNumber from './toNumber'

export default function queryForm(query: Record<string, any>) {
  const _query: Record<string, any> = {}
  for (const i in query) {
    if (Object.hasOwnProperty.call(query, i)) {
      if (!isEmpty(query[i])) {
        if (query[i].length > 10) {
          _query[i] = query[i]
        } else if (query[i].toString().indexOf('0') === 0) {
          _query[i] = query[i]
        } else if (isNumber(query[i])) {
          _query[i] = toNumber(query[i])
        } else {
          _query[i] = query[i]
        }
      }
    }
  }

  return _query
}