/**
* 把String装换成Number
* @param {String} str
*
* 用于把String装换成Number
*
* @returns Number
*
* @date 2017-10-26
* @author Ping YF (koakumaping@163.com)
*/

const toNumber = (str, dotLength = -1, roundUp = false) => {
  let _num = str * 1
  if (isNaN(_num)) {
    _num = ''
  } else if (dotLength > -1) {
    if (roundUp) {
      _num = _num.toFixed(dotLength)
    } else {
      _num += ''
      if (_num.indexOf('.') > -1) {
        _num = _num.substr(0, _num.indexOf('.') + dotLength + 1)
        if (dotLength === 0) _num = _num.replace('.', '')
      }
    }
    _num *= 1
  }
  return _num
}

export default toNumber