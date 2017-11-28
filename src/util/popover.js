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
  let top = inbody ? clientReact.top : clientReact.top - relativeClientReact.top
  let left = inbody ? clientReact.left : clientReact.left - relativeClientReact.left
  // const width = clientReact.width
  // const height = clientReact.height
  // console.log(top, left, width, height)
  if (options.place === 'left' || options.place === 'top-left') {
    // console.log(_popoverNode.clientWidth, util.getStyle(_popoverNode, 'width'))
    left -= Number(_popoverNode.offsetWidth)
  }

  if (options.place === 'right' || options.place === 'top-right') {
    left += Number(_node.offsetWidth)
  }

  if (options.place === 'top') {
    top -= _popoverNode.offsetHeight
    left += (_node.offsetWidth - _popoverNode.offsetWidth) / 2
  }

  if (options.place === 'bottom') {
    top += _node.offsetHeight
    // 保证是正数
    left += (Math.abs(_node.offsetWidth - _popoverNode.offsetWidth)) / 2
  }

  // 重新计算popover的高度，使其保证显示在元素中间
  if (options.place === 'left' || options.place === 'right') {
    top += (_node.offsetHeight / 2 - _popoverNode.offsetHeight / 2)
    // top -= 16
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