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
import isNumber from './isNumber'
import isObject from './isObject'
import toNumber from './toNumber'

const formatResponse = (list = [], noOrigin = false) => {
  const _list = []
  const noFormatList = ['BankCardNumber', 'Account']
  for (let i = 0, l = list.length; i < l; ++i) {
    // 创建新的一行
    const _line = {
      // 是否处于编辑状态，默认否
      edit: false,
    }

    // 保存一份原始数据，用于还原
    if (!noOrigin) _line._origin = clone(list[i])

    for (const item in list[i]) {
      let currentItem = list[i][item]
      if (isObject(currentItem) && hasOwn(currentItem, 'value')) {
        if (hasOwn(currentItem.value, 'rows')) {
          currentItem.value.rows = formatResponse(currentItem.value.rows, noOrigin)
        }
        if (isNumber(currentItem.value)) {
          if (currentItem.value.toString().length > 13) {
            _line[item] = currentItem.value
          } else {
            _line[item] = toNumber(currentItem.value)
          }
          if (noFormatList.indexOf(item) > -1) {
            // 不需要转换的列表
            _line[item] = currentItem.value
          }
        } else {
          _line[item] = currentItem.value
        }
        // _line[item] = isNumber(currentItem.value) ?
        //   Number(currentItem.value) : currentItem.value
        // _开头的强制全部小写
        if (item.indexOf('_') === 0) {
          _line[item.toLowerCase()] = _line[item]
          delete _line[item]
        }
      } else {
        _line[item] = currentItem
      }
    }
    _list.push(_line)
  }
  return _list
}

export default formatResponse