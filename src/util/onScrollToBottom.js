/**
* 页面滚动至底部
*
* onScrollToBottom
*
*
* @date 2016-09-23
* @author Ping YF (koakumaping@163.com)
*/
import getScrollHeight from './getScrollHeight'
import getDocumentTop from './getDocumentTop'
import getWindowHeight from './getWindowHeight'

const onScrollToBottom = (callback = () => {}) => {
  if (getScrollHeight() === getDocumentTop() + getWindowHeight()) {
    callback()
  }
}

export default onScrollToBottom