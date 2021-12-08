/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];
  const current = [];
  let currentSum = 0;

  function backtrack(start) {
    if (current.length === k) {
      if (currentSum === n) {
        result.push([...current]);
      }
      return;
    }

    for (let i = start; i <= 9; i++) {
      current.push(i);
      currentSum += i;
      backtrack(i + 1);
      currentSum -= i;
      current.pop();
    }
  }

  backtrack(1);
  return result;
};
// @lc code=end

console.log(combinationSum3(9, 45));
