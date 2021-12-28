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
  const ans = [];
  const n = nums.length;
  const selected = [];

  const dfs = (currentIndex) => {
    if (currentIndex === n) {
      ans.push([...selected]);
      return;
    }
    selected.push(nums[currentIndex]);
    dfs(currentIndex + 1);
    selected.pop();
    dfs(currentIndex + 1);
  };

  dfs(0);
  return ans;
};
// @lc code=end

subsets([1, 2, 3]);
