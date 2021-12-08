/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const len = nums.length;
  let left = 0;
  let right = len;
  while (left < right) {
    let count = 0;
    let mid = Math.floor((left + right) / 2);

    for (let i = 0; i < len; i++) {
      if (nums[i] <= mid) {
        count++;
      }
    }

    if (count > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
// @lc code=end
