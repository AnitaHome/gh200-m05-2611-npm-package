/**
 * 將字串首字母轉換為大寫
 * @param {string} str 
 * @returns {string}
 */
function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 反轉輸入之字串
 * @param {string} str 
 * @returns {string}
 */
function reverse(str) {
  if (typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

module.exports = {
  capitalize,
  reverse
};