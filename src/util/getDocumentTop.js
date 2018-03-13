/**
  * 文档高度
  *
  * getDocumentTop
  *
  * @returns {Number}
  *
  * @date 2016-09-23
  * @author Ping YF (koakumaping@163.com)
*/
const getDocumentTop = () => {
  let scrollTop = 0
  let bodyScrollTop = 0
  let documentScrollTop = 0

  if (document.body) {
    bodyScrollTop = document.body.scrollTop
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
  return scrollTop
}

export default getDocumentTop