/**
* Object转换成url params
*
* 用于Object转换成url params
*
* @returns String
*
* @date 2018-04-23
* @author Ping YF (koakumaping@163.com)
*/

const object2params = (params) => {
  if (params) {
    return '?' + Object.keys(params).map((key) => (
      [key, params[key]].map(window.encodeURIComponent).join('=')
    )).join('&')
  }
  return ''
}

export default object2params