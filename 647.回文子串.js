/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let ans = 0;
  const len = s.length;

  // 找出所有的中心点
  // 单个字符中心点 len 个，双字符中心点 len - 1 个
  for (let center = 0; center < 2 * len - 1; center++) {
    let left = Math.floor(center / 2);
    let right = left + (center % 2);

    while (left >= 0 && right <= len && s[left] === s[right]) {
      ans++;
      left--;
      right++;
    }
  }

  return ans;
};
// @lc code=end
