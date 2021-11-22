import hasOwn from './hasOwn'
import camelCase from './camelCase'
import isObject from './isObject'

/**
* 判断是否有该className
*
* 用于判断当前className是否存在
*
* @returns true  有
* @returns false 没有
*
* @date 2017-07-05
* @author Ping YF (koakumaping@163.com)
*/
export const hasClass = (elemet: HTMLElement, cls: string) => {
  const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`)
  if (elemet.className.match(reg)) return true
  return false
}

/**
* 给element添加className
*
* 用于给element添加className
*
* @date 2017-07-05
* @author Ping YF (koakumaping@163.com)
*/
export const addClass = (elemet: HTMLElement, cls: string) => {
  const el = elemet

  if (el.className) {
    el.className = `${el.className} ${cls}`
  } else {
    el.className = cls
  }
}

/**
* 给element移除className
*
* 用于给element添加className
*
* @date 2017-07-05
* @author Ping YF (koakumaping@163.com)
*/
export const removeClass = (elemet: HTMLElement, cls: string) => {
  const el = elemet
  el.className = el.className.replace(` ${cls}`, '')
}

/**
* 获取element的styleName对应的值
*
* 用于获取element的styleName对应的值
*
* @returns {String, Number}
*
* @date 2017-08-04
* @author Ping YF (koakumaping@163.com)
*/
export const getStyle = (element: HTMLElement, styleName: any): string => {
  if (!element || !styleName) return ''
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    const computed = document.defaultView && document.defaultView.getComputedStyle(element, '')

    let style = ''
    if (computed) {
      style = computed[styleName]
    } else {
      style = element.style[styleName]
    }
    return style
  } catch (e) {
    return element.style[styleName]
  }
}

/**
* 设置element的styleName对应的值
*
* 用于设置element的styleName对应的值
*
* @date 2017-08-04
* @author Ping YF (koakumaping@163.com)
*/
export const setStyle = (element: HTMLElement, styleName: any, value: any) => {
  if (!element || !styleName) return

  if (isObject(styleName)) {
    for (const prop in styleName) {
      if (hasOwn(styleName, prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelCase(styleName)
    if (styleName === 'opacity') {
      element.style.filter = window.isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
      element.style[styleName] = value
    }
  }
}

/**
* 判断是否有该attrName
*
* 用于判断当前attrName是否存在
*
* @date 2017-12-12
* @author Ping YF (koakumaping@163.com)
*/
export const hasAttr = (elemet: HTMLElement, attr: string) => {
  if (elemet.hasAttributes()) {
    const attrs = elemet.attributes
    for (let i = attrs.length - 1; i >= 0; i--) {
      if (attrs[i].name === attr) return true
    }
  }
  return false
}

/**
* 获取element的attrName
*
* 用于获取element的attrName
*
* @date 2017-12-12
* @author Ping YF (koakumaping@163.com)
*/
export const getAttr = (elemet: HTMLElement, attr: string) => {
  if (elemet.hasAttributes()) {
    const attrs = elemet.attributes
    for (let i = attrs.length - 1; i >= 0; i--) {
      if (attrs[i].name === attr) return attrs[i].value
    }
  }
  return ''
}