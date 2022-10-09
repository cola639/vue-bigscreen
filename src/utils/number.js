/**
 * 数字不够x位，前面补0
 * @param {*} num 数字
 * @param {*} len 补零长度
 * @returns  0001
 */
export function formatZero(num, len) {
  if (String(num).length > len) {
    return num
  }
  const res = (Array(len).join(0) + num).slice(-len)
  console.log('🚀 ~ formatZero ~ res', res.split(''))
  return res.split('')
}

/**
 * 将一个数组以len长度分割，获取关键下标
 *
 * @param {*} arr
 * @param {*} len
 * @return {*}
 */
export function splitArray(arr, len) {
  let ret = []
  for (let i = 0; i < arr.length; i += len) {
    const tempArr = arr.slice(i, i + len)
    const keyIndex = tempArr.shift()
    console.log('🚀 ~ splitArray ~ keyIndex', keyIndex)
    ret.push(keyIndex)
  }
  return ret
}

export function debounce(fn, delay) {
  let t
  return function (...args) {
    t && clearTimeout(t)

    t = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
