/**
* 重新格式化返回的数据
*
* 用于重新格式化返回的数据
*
* @returns {Array}
*
* @date 2017-09-15
* @author Ping YF (koakumaping@163.com)
*/
import clone from './clone'
import hasOwn from './hasOwn'

const formatResponse = (list = []) => {
  const _list = []
  for (let i = 0, l = list.length; i < l; ++i) {
    // 创建新的一行
    const _line = {
      // 是否处于编辑状态，默认否
      edit: false,
      // 保存一份原始数据，用于还原
      _origin: clone(list[i]),
    }
    for (const item in list[i]) {
      if (hasOwn(list[i][item], 'value')) {
        _line[item] = list[i][item].value
      }
    }
    _list.push(_line)
  }
  return _list
}

export default formatResponse