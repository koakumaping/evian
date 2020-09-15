type Date = string | number | void

/**
* 获取年
*
* 用于获取几几年
*
* @returns Number
*
* @date 2017-08-29
* @author Ping YF (koakumaping@163.com)
*/
export const getYear = (date: Date) => {
  let tmpDate = new Date()
  if (date) {
    tmpDate = new Date(date)
  }
  return tmpDate.getFullYear()
}

/**
* 获取月份
*
* 用于获取几月
*
* @returns Number
*
* @date 2017-08-29
* @author Ping YF (koakumaping@163.com)
*/
export const getMonth = (date: Date) => {
  let tmpDate = new Date()
  if (date) {
    tmpDate = new Date(date)
  }
  return tmpDate.getMonth()
}

/**
* 获取实际的月份
*
* 用于获取现在是几月
*
* @returns Number
*
* @date 2017-08-29
* @author Ping YF (koakumaping@163.com)
*/
export const getRealMonth = (date: Date) => {
  let tmpDate = new Date()
  if (date) {
    tmpDate = new Date(date)
  }
  return tmpDate.getMonth() + 1
}

/**
* 获取日
*
* 用于获取几日
*
* @returns Number
*
* @date 2017-08-29
* @author Ping YF (koakumaping@163.com)
*/
export const getDate = (date: Date) => {
  let tmpDate = new Date()
  if (date) {
    tmpDate = new Date(date)
  }
  return tmpDate.getDate()
}

/**
* 获取小时
*
* 用于获取小时
*
* @returns Number
*
* @date 2018-06-26
* @author Ping YF (koakumaping@163.com)
*/
export const getHours = (date: Date) => {
  let tmpDate = new Date()
  if (date) {
    tmpDate = new Date(date)
  }
  return tmpDate.getHours()
}

/**
* 获取分钟
*
* 用于获取分钟
*
* @returns Number
*
* @date 2018-06-26
* @author Ping YF (koakumaping@163.com)
*/
export const getMinutes = (date: Date) => {
  let tmpDate = new Date()
  if (date) {
    tmpDate = new Date(date)
  }
  return tmpDate.getMinutes()
}

/**
* 获取秒
*
* 用于获取秒
*
* @returns Number
*
* @date 2018-06-26
* @author Ping YF (koakumaping@163.com)
*/
export const getSeconds = (date: Date) => {
  let tmpDate = new Date()
  if (date) {
    tmpDate = new Date(date)
  }
  return tmpDate.getSeconds()
}

/**
* 获取某日是星期几
*
* @param {Number, Number, Number} day, month, year
*
* @returns Number 0,1,2,3,4,5,6代表日，一，二，三，四，五，六
*
* @date 2017-08-29
* @author Ping YF (koakumaping@163.com)
*/
export const getDayOfMonth = (day: number, month: number, year = new Date().getFullYear()) => {
  const tmpDate = new Date(year, month, day)
  return tmpDate.getDay()
}

/**
* 获取该月有几天
*
* @param {Number, Number} month, year
*
* @returns Number
*
* @date 2017-07-24
* @author Ping YF (koakumaping@163.com)
*/
export const getDayCountOfMonth = (month: number, year = new Date().getFullYear()) => {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return 29
    } else if (year % 400 === 0) {
      return 29
    }
    return 28
  }

  return 31
}

/**
* 获取该月第一天是星期几
*
* @param {Date} date
*
* @returns Number 0,1,2,3,4,5,6代表日，一，二，三，四，五，六
*
* @date 2017-07-24
* @author Ping YF (koakumaping@163.com)
*/
export const getFirstDayOfMonth = (date: Date) => {
  const tmpDate = date ? new Date(date) : new Date()
  tmpDate.setDate(1)
  return tmpDate.getDay()
}

/**
* 获取上一个月是几月
*
* @param {Number} month
*
* @returns Number
*
* @date 2017-07-24
* @author Ping YF (koakumaping@163.com)
*/
export const getPrevMonth = (month: number) => {
  if (month === 0) {
    return 11
  }
  return month - 1
}

/**
* 获取下一个月是几月
*
* @param {Number} month
*
* @returns Number
*
* @date 2017-07-24
* @author Ping YF (koakumaping@163.com)
*/
export const getNextMonth = (month: number) => {
  if (month === 11) {
    return 0
  }
  return month + 1
}


/**
* 设置当天时间为00:00:00.00
*
*
* @returns Date(timestamp)
*
* @date 2017-07-24
* @author Ping YF (koakumaping@163.com)
*/
export const clearHours = (date: Date) => {
  const tmpDate = date ? new Date(date) : new Date()
  tmpDate.setHours(0, 0, 0, 0)
  return tmpDate.getTime()
}

/**
* 设置当天时间为00:00:00.00
*
*
* @returns Date(timestamp)
*
* @date 2017-07-24
* @author Ping YF (koakumaping@163.com)
*/
export const getYYYYMMDD = () => `${getYear()}-${getRealMonth()}-${getDate()}`