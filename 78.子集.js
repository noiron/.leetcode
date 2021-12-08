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

  for (let mask = 0; mask < (1 << nums.length); mask++) {
    const currentSet = [];
    for (let i = 0; i < nums.length; i++) {
      if (mask & 1 << i) {
        currentSet.push(nums[i]);
      }
    }
    ans.push(currentSet);
  }

  return ans;
};
// @lc code=end
