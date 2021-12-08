/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
  const result = [];
  const current = [];

  function backtrack(startIndex) {
    if (current.length === k) {
      result.push([...current]);
      return;
    }

    for (let i = startIndex; i <= n; i++) {
      current.push(i);
      backtrack(i + 1);
      current.pop();
    }
  }
  backtrack(1);
  return result;
};

// @lc code=end
