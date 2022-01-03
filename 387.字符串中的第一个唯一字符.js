/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], -1);
    }
  }

  let char = '';
  map.forEach((value, key) => {
    if (value === 1 && !char) char = key;
  });

  if (!char) return -1;
  return s.indexOf(char);
};
// @lc code=end

console.log(
  firstUniqChar('aabb')
);
