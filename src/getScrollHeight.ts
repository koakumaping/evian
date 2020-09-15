/**
  * 滚动条滚动高度
  *
  * getScrollHeight
  *
  * @returns {Number}
  *
  * @date 2016-09-23
  * @author Ping YF (koakumaping@163.com)
*/

const getScrollHeight = () => {
  let scrollHeight = 0
  let bodyScrollHeight = 0
  let documentScrollHeight = 0

  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ?
    bodyScrollHeight : documentScrollHeight
  return scrollHeight
}

export default getScrollHeight