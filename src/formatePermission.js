/**
* 重新格式化返回的数据中的权限相关的数据
*
* 用于重新格式化返回的数据中的权限相关的数据
*
* @returns {Object}
*
* @date 2017-10-27
* @author Ping YF (koakumaping@163.com)
*/
import hasOwn from './hasOwn'
import toNumber from './isNumber'

const formatePermission = (form) => {
  if (!hasOwn(form, '_origin')) return {}
  const _origin = form._origin

  const _permission = {}
  for (const item in _origin) {
    if (hasOwn(_origin, item) && hasOwn(_origin[item], 'option')) {
      _permission[item] = {
        readonly: toNumber(_origin[item].option.readonly),
        visible: toNumber(_origin[item].option.visible),
      }
    }
  }

  return _permission
}

export default formatePermission