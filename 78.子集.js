/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const len = nums.length;
  const selected = [];

  function dfs(currentIndex) {
    if (currentIndex === len) {
      result.push([...selected]);
      return;
    }
    // 分别处理当前数字加入和未加入子集的两种情况
    selected.push(nums[currentIndex]);
    dfs(currentIndex + 1);
    selected.pop();
    dfs(currentIndex + 1);
  }

  dfs(0);
  return result;
};
// @lc code=end

subsets([1, 2, 3]);
