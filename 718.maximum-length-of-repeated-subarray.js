/*
 * @lc app=leetcode id=718 lang=javascript
 *
 * [718] Maximum Length of Repeated Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let ans = 0;
  const memo = [];
  const m = nums1.length,
    n = nums2.length;
  for (let i = 0; i < m + 1; i++) {
    memo[i] = [];
  }

  for (let i = m - 1; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      if (nums1[i] === nums2[j]) {
        memo[i][j] = (memo[i + 1][j + 1] ?? 0) + 1;
        if (ans < memo[i][j]) {
          ans = memo[i][j];
        }
      }
    }
  }
  return ans;
};
// @lc code=end
