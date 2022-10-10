import { formatZero } from './number'

/**
 * get url param
 *
 * @param {*} query
 * @return {*} query value
 */
function getUrlParam(query) {
  const reg = new RegExp('(^|&)' + query + '=([^&]*)(&|$)')
  const r =
    window.location.search.substr(1).match(reg) ||
    window.location.hash.substring(window.location.hash.search(/\?/) + 1).match(reg)
  if (r != null) {
    return decodeURIComponent(r[2])
  }
}

/**
 * get url params object
 * @param {string} url
 * @returns {Object}
 */
function getUrlParams(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

export default {
  formatZero,
  getUrlParam,
  getUrlParams
}
