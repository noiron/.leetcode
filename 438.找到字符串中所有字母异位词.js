/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const len = p.length;
  if (s.length < len) return [];

  const count = {};
  for (let i = 0; i < len; i++) {
    const char = p[i];
    count[char] = count[char] === undefined ? 1 : count[char] + 1;
  }

  function allZero(obj) {
    const keys = Object.keys(obj);
    return keys.every((key) => obj[key] === 0);
  }

  let result = [];

  for (let i = 0; i < len; i++) {
    let char = s[i];
    if (count[char] === undefined) {
      count[char] = -1;
    } else {
      count[char]--;
    }
  }

  for (let i = 0; i < s.length - len + 1; i++) {
    if (allZero(count)) result.push(i);
    count[s[i]]++;
    if (!count[s[i + len]]) {
      count[s[i + len]] = -1;
    } else {
      count[s[i + len]]--;
    }
  }

  return result;
};
// @lc code=end

findAnagrams('cbaebabacd', 'abc');

