/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (
      (mid % 2 === 0 && nums[mid] === nums[mid + 1]) ||
      (mid % 2 === 1 && nums[mid] === nums[mid - 1])
    ) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[right];
};
// @lc code=end
