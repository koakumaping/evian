import { getStyle } from './dom'
import isVNode from './isVNode'

function getRelativeNode(el) {
  let parent
  let child = el
  let flag = true
  while (flag) {
    if (child.parentNode && child.parentNode.nodeName !== 'BODY') {
      parent = child.parentNode
      const position = getStyle(parent, 'position')
      if (position === 'relative' || position === 'absolute') {
        return parent
      }
      child = parent
      parent = parent.parentNode
    } else {
      flag = false
    }
  }

  return parent
}

function getRelativeNodeClientRect(el) {
  return getRelativeNode(el).getBoundingClientRect()
}

function getNodeClientRect(el) {
  return el.getBoundingClientRect()
}

function getPopoverPosition(node, popoverNode, options = { place: 'left' }, inbody = false) {
  const _node = isVNode(node) ? node.$el : node
  const _popoverNode = isVNode(popoverNode) ? popoverNode.$el : popoverNode
  // console.log(_node, _popoverNode)
  const relativeClientReact = getRelativeNodeClientRect(_node)
  const clientReact = getNodeClientRect(_node)

  // inbody表示取元素跟body的top, left
  let top = inbody ?
    window.pageYOffset + clientReact.top :
    clientReact.top - relativeClientReact.top
  let left = inbody ?
    window.pageXOffset + clientReact.left :
    clientReact.left - relativeClientReact.left

  if (options.place === 'left' || options.place === 'left-top' || options.place === 'left-bottom') {
    left -= Number(_popoverNode.offsetWidth)
  }

  if (options.place === 'right' || options.place === 'right-top' || options.place === 'right-bottom') {
    left += Number(_node.offsetWidth)
  }

  if (options.place === 'top') {
    top -= _popoverNode.offsetHeight
    left += _node.offsetWidth / 2 - _popoverNode.offsetWidth / 2
  }

  if (options.place === 'bottom') {
    top += _node.offsetHeight
    // 保证是正数
    left += _node.offsetWidth / 2 - _popoverNode.offsetWidth / 2
  }

  if (options.place === 'top-left' || options.place === 'top-right') {
    top -= _popoverNode.offsetHeight
  }

  if (options.place === 'bottom-left' || options.place === 'bottom-right') {
    top += _node.offsetHeight
  }

  // if (options.place === 'bottom-left') {
  //   left = left
  // }

  if (options.place === 'bottom-right') {
    left += _node.offsetWidth - _popoverNode.offsetWidth
  }

  // if (options.place === 'top-left') {
  //   left = left
  // }

  if (options.place === 'top-right') {
    left += _node.offsetWidth - _popoverNode.offsetWidth
  }

  if (options.place === 'left-bottom' || options.place === 'right-bottom') {
    top += (_node.offsetHeight - _popoverNode.offsetHeight)
  }

  // 重新计算popover的高度，使其保证显示在元素中间
  if (options.place === 'left' || options.place === 'right') {
    top += (_node.offsetHeight / 2 - _popoverNode.offsetHeight / 2)
  }

  // console.log(top, left, width, height)
  const ret = {}
  ret.position = 'absolute'
  ret.left = `${left}px`
  ret.top = `${top}px`
  ret.zIndex = 1
  return ret
}

export default getPopoverPosition