/**
* 判断是否是Vue Node
*
* 用于判断是否是Vue Node
*
* @returns true  是VNode
* @returns false 不是VNode
*
* @date 2017-09-01
* @author Ping YF (koakumaping@163.com)
*/
import hasOwn from './hasOwn'

const isVNode = (node) => typeof node === 'object' && hasOwn(node, '_vnode')

export default isVNode