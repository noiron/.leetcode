/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const path = [];
  const len = nums.length;

  function backtrack(used) {
    if (path.length === len) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < len; i++) {
      if (used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      backtrack(used);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return result;
};

// @lc code=end
