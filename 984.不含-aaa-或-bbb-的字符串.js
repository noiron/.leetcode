/*
 * @lc app=leetcode.cn id=984 lang=javascript
 *
 * [984] 不含 AAA 或 BBB 的字符串
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a, b) {
  let result = ''

  while (a > 0 || b > 0) {
    let writeA = false;
    const len = result.length;
    if (len >= 2 && result[len-1] === result[len-2]) {
      if (result[len-1] === 'b') {
        writeA = true;
      }
    } else {
      if (a >= b) {
        writeA = true;
      }
    }

    if (writeA) {
      a--;
      result += 'a';
    } else {
      b--;
      result += 'b';
    }
  }
  return result;
};
// @lc code=end

console.log(strWithout3a3b(4, 1));
console.log(strWithout3a3b(1, 0));
