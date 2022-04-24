/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  let num = numerator;
  let den = denominator;

  let result = '';
  if (num * den < 0) {
    result += '-';
    num = Math.abs(num);
    den = Math.abs(den);
  }


  // 整数部分
  result += Math.floor(num / den) + '';
  num %= den;

  if (num === 0) {
    return result;
  }

  // 小数位置
  result += '.';
  const map = new Map();
  // 记录位置
  map.set(num, result.length);
  while (num !== 0) {
    num *= 10;
    result += Math.floor(num / den);
    num %= den;
    if (map.has(num)) {
      const index = map.get(num);
      result = result.slice(0, index) + '(' + result.slice(index);
      result += ')';
      break;
    } else {
      map.set(num, result.length)
    }
  }

  return result;
};
// @lc code=end

console.log(fractionToDecimal(1, 2));
console.log(fractionToDecimal(4, 333));
