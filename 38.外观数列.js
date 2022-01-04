/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';

  const count = (str) => {
    let result = '';
    for (i = 0; i < str.length; i++) {
      const curr = str[i];
      let count = 1;
      while (i + 1 < str.length && curr === str[i + 1]) {
        count++;
        i++;
      }
      result += count + curr;
    }

    return result;
  };

  return count(countAndSay(n - 1));
};
// @lc code=end

console.log(countAndSay(5));
