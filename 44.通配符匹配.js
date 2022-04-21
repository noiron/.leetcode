/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (str, pattern) {
  // https://leetcode.com/problems/wildcard-matching/discuss/17810/Linear-runtime-and-constant-space-solution
  let s = 0;
  let p = 0;
  let lastMatch = 0; // 上一次 * 匹配到的位置终点
  let starIndex = -1; // 上一个 * 的位置

  while (s < str.length) {
    if (pattern[p] === '?' || pattern[p] === str[s]) {
      s++;
      p++;
      continue;
    }

    if (pattern[p] === '*') {
      starIndex = p;
      lastMatch = s;
      // * 可以匹配空字符，所以 s 不能直接加一?
      p++;
    }

    // 之前匹配到了 *
    else if (starIndex !== -1) {
      p = starIndex + 1;
      lastMatch++;
      s = lastMatch;
    } else {
      return false;
    }
  }

  while (pattern[p] === '*') {
    p++;
  }

  return p === pattern.length;
};
// @lc code=end

console.log(isMatch('acdscd', '*cd')); // true

console.log(isMatch('adceb', '*a*b')); // true

console.log(isMatch('acdcb', 'a*c?b')); // false
