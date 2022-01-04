/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  const selected = [];

  const dfs = (choosePre, i) => {
    if (i === nums.length) {
      ans.push([...selected]);
      return;
    }
    dfs(false, i + 1);
    if (!choosePre && i > 0 && nums[i - 1] === nums[i]) {
      return;
    }
    selected.push(nums[i]);
    dfs(true, i + 1);
    selected.pop();
  };

  dfs(false, 0);
  return ans;
};
// @lc code=end

console.log(subsetsWithDup([4, 4, 4, 1, 4]));
