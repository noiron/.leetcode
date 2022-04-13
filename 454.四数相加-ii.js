/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const n = nums1.length;

  const hash1 = {};
  const hash2 = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const sum1 = nums1[i] + nums2[j];
      hash1[sum1] = hash1[sum1] === undefined ? 1 : hash1[sum1] + 1;

      const sum2 = nums3[i] + nums4[j];
      hash2[sum2] = hash2[sum2] === undefined ? 1 : hash2[sum2] + 1;
    }
  }

  let result = 0;
  for (const key of Object.keys(hash1)) {
    if (hash2[-key]) {
      result += hash1[key] * hash2[-key];
    }
  }
  return result;
};
// @lc code=end

fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]);
