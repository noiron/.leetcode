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

  // mask 中为1的位置需要保留，依次检查所有可能的 mask，0 ~ 2^n-1
  for (let mask = 0; mask < 1 << n; mask++) {
    const currentSet = [];
    for (let i = 0; i < n; i++) {
      // 1 << i 只有一位是1，即当前需要检查的位置
      if (mask & (1 << i)) {
        currentSet.push(nums[i]);
      }
    }

    ans.push(currentSet);
  }
  return ans;
};
// @lc code=end

subsets([1, 2, 3]);
