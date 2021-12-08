/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const hashTable = {};

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const sorted = [...str].sort().join();
    if (!hashTable[sorted]) {
      hashTable[sorted] = [str];
    } else {
      hashTable[sorted].push(str);
    }
  }

  const result = [];
  const keys = Object.keys(hashTable);
  for (let i = 0; i < keys.length; i++) {
    result.push(hashTable[keys[i]]);
  }

  return result;
};
// @lc code=end

