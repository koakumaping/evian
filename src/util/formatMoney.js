/**
* 格式化金额
*
* 用于格式化金额为三位一个逗号分割
*
* @returns String
*
* @date 2017-08-21
* @author Ping YF (koakumaping@163.com)
*/

// 先提取整数部分
const formatMoney = (value) => value.toString().replace(/\d+/, (n) =>
  n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => `${$1},`),
)

export default formatMoney