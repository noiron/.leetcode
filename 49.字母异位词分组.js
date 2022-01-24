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
var groupAnagrams = function (strs) {
  const map = {};

  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const char of str) {
      count[char.charCodeAt() - 'a'.charCodeAt()]++;
    }
    // 注意这里使用的是对象，而非真正的 Map，所以 key 会转换成 string 来判断唯一性
    // 所以数组 count 内的值一样时，能取到 map 内相同的值
    if (!map[count]) {
      map[count] = [str];
    } else {
      map[count].push(str);
    }
  }

  return Object.values(map);
};
// @lc code=end
