/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length;
  // dp[i] 代表的是以 nums[i] 为结尾的子字符串的最大长度
  const dp = new Array(len).fill(1);
  let result = 0;

  for (let i = 0; i < len; i++) {
    // 依次检查 nums[i] 之前的每一个数，是否有比 nums[i] 小的数
    // 如果存在，则将 nums[i] 加入到原来的子串的最后
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    result = Math.max(result, dp[i]);
  }

  return result;
};
// @lc code=end
