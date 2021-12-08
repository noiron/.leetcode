/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (!map.get(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    if (map.get(char)) {
      map.set(char, map.get(char) - 1);
    } 
  }

  let result = true;
  map.forEach((value, key) => {
    if (value > 0) result = false;
  })

  return result;
};
// @lc code=end

canConstruct('aa', 'aba')
