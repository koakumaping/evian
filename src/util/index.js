import debounce from './debounce'
import throttle from './throttle'
import scrollbarWidth from './scrollbarWidth'
import popover from './popover'
import { decode64, encode64 } from './base64'

// dom监听
import { addResizeListener, removeResizeListener } from './resize-event'
import handleEvent from './handleEvent'

// 判断类
import isPC from './isPC'
import isFunction from './isFunction'
import isArray from './isArray'
import isEmptyObject from './isEmptyObject'
import isObject from './isObject'
import isBoolean from './isBoolean'
import isString from './isString'
import isNumber from './isNumber'
import isMobileNumber from './isMobileNumber'
import hasChinese from './hasChinese'
import hasOwn from './hasOwn'
import inOf from './inOf'
// 操作类
import clone from './clone'
import queryClone from './queryClone'
import formatMoney from './formatMoney'

// dom
import {
  hasClass,
  addClass,
  removeClass,
  getStyle,
  setStyle,
  hasAttr,
  getAttr,
} from './dom'

// get
import getWindowHeight from './getWindowHeight'
import randomString from './randomString'

// date
import {
  getYear,
  getMonth,
  getRealMonth,
  getDate,
  getDayOfMonth,
  getFirstDayOfMonth,
  getDayCountOfMonth,
  getPrevMonth,
  getNextMonth,
  clearHours,
  getYYYYMMDD,
} from './date'

// 转换
import toNumber from './toNumber'

// 数据处理，定制化
import formatResponse from './formatResponse'
import formatePermission from './formatePermission'
import restoreResponse from './restoreResponse'

// 定制化函数
import getObjectFromArray from './getObjectFromArray'
import getDict from './getDict'

export {
  decode64,
  encode64,
  popover,
  debounce,
  throttle,
  scrollbarWidth,
  addResizeListener,
  removeResizeListener,
  handleEvent,
  isPC,
  isFunction,
  isArray,
  isEmptyObject,
  isObject,
  isBoolean,
  isString,
  isNumber,
  isMobileNumber,
  hasChinese,
  clone,
  queryClone,
  formatMoney,
  hasOwn,
  inOf,
  hasClass,
  addClass,
  removeClass,
  getStyle,
  setStyle,
  hasAttr,
  getAttr,
  getWindowHeight,
  getYear,
  getMonth,
  getRealMonth,
  getDate,
  getDayOfMonth,
  getFirstDayOfMonth,
  getDayCountOfMonth,
  getPrevMonth,
  getNextMonth,
  clearHours,
  getYYYYMMDD,
  randomString,
  toNumber,
  formatResponse,
  formatePermission,
  restoreResponse,
  getObjectFromArray,
  getDict,
}