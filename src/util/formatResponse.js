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
import toNumber from './toNumber'

const formatResponse = (list = [], noOrigin = false) => {
  const _list = []
  for (let i = 0, l = list.length; i < l; ++i) {
    // 创建新的一行
    const _line = {
      // 是否处于编辑状态，默认否
      edit: false,
    }

    // 保存一份原始数据，用于还原
    if (!noOrigin) _line._origin = clone(list[i])

    for (const item in list[i]) {
      if (hasOwn(list[i][item], 'value')) {
        if (hasOwn(list[i][item].value, 'rows')) {
          list[i][item].value.rows = formatResponse(list[i][item].value.rows, noOrigin)
        }
        if (isNumber(list[i][item].value)) {
          if (list[i][item].value.toString().length > 13) {
            _line[item] = list[i][item].value
          } else {
            _line[item] = toNumber(list[i][item].value)
          }
        } else {
          _line[item] = list[i][item].value
        }
        // _line[item] = isNumber(list[i][item].value) ?
        //   Number(list[i][item].value) : list[i][item].value
        // _开头的强制全部小写
        if (item.indexOf('_') === 0) {
          _line[item.toLowerCase()] = _line[item]
          delete _line[item]
        }
      } else {
        _line[item] = list[i][item]
      }
    }
    _list.push(_line)
  }
  return _list
}

export default formatResponse