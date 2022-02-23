/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  const len = score.length;
  const sorted = [...score];
  sorted.sort((a, b) => b - a);
  const map = {};
  for (let i = 0; i < len; i++) {
    map[score[i]] = i; 
  }

  function findOutput(index) {
    const outputs = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
    return index < 3 ? outputs[index] : index + 1 + '';
  }

  const result = [];
  for (let i = 0; i < len; i++) {
    // 找出这个分数在未排序的数组中是第几位
    const originalIndex = map[sorted[i]];
    result[originalIndex] = findOutput(i);
  }
  return result;
};
// @lc code=end

