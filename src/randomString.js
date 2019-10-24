/**
* 生成N位随机字符
*
* 用于生成N位随机字符
*
* @returns String
*
* @date 2017-09-01
* @author Ping YF (koakumaping@163.com)
*/

const randomString = (n = 4, onlyNumber = false, useSymbol = true) => {
  // 生成n位随机数
  const num = '0123456789'
  const letter = 'abcdefghijklmnopqrstuvwxyz'
  const symbol = '!@#$^*()'
  let str = `${num}${letter}${symbol}`
  if (!useSymbol) str = `${num}${letter}`
  if (!onlyNumber) str = num
  const arr = str.split('')
  let validate = ''
  let ranNum
  for (let i = 0; i < n; i++) {
    ranNum = Math.floor(Math.random() * str.length)   // 随机数在[0,9]之间
    validate += arr[ranNum]
  }
  return validate
}

export default randomString