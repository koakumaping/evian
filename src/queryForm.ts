/**
* 用来复制$route.query，过滤掉空的
* @param query {Object}  要复制的要复制的query
*
* @return {Object}     返回一个过滤过的query
*/
import toNumber from './toNumber'

export default function queryForm(query: Record<string, any>) {
  const _query: Record<string, any> = {}
  for (const i in query) {
    if (Object.hasOwnProperty.call(query, i)) {
      if (query[i] !== '') {
        if (query[i][query[i].length - 1] === ',') {
          // 末尾加逗号的还原成数组
          query[i] = query[i].slice(0,-1)
          _query[i] = query[i].split(',')
        } else {
          // 把字符数字转换成数字
          if (!isNaN(Number(query[i]))) {
            _query[i] = toNumber(query[i])
          } else {
            _query[i] = query[i]
          }
        }
      }
    }
  }

  return _query
}