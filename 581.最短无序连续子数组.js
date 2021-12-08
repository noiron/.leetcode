/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {

  const len = nums.length;
  let max = -Infinity;
  let right = -1;
  let min = Infinity;
  let left = -1;

  for (let i = 0; i < len; i++) {
    if (max > nums[i]) {
      right = i;
    } else {
      max = nums[i];
    }

    if (min < nums[len - 1 - i]) {
      left = len - 1 - i;
    } else {
      min = nums[len - 1 - i];
    }
  }

  return right === -1 ? 0 : right - left + 1;  

};
// @lc code=end

console.log(
findUnsortedSubarray([1, 2, 3, 4])
)
