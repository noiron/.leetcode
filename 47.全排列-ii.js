/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // 为了判断是否重复，先将数组排序
  nums.sort((a, b) => a - b);
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
      // 如果相邻的两个数相等，前一个数未选、当前数选中，这种情况和前一个数选中、当前数未选是一样的
      if (i > 0 &&  nums[i] === nums[i-1] && !used[i-1]) continue;
  
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
