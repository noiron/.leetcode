/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const reverse = (nums, start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  nums.reverse();
  const index = k % nums.length;
  reverse(nums, 0, index - 1);
  reverse(nums, index, nums.length - 1);
};
// @lc code=end

const nums = [1,2,3,4,5,6,7]
rotate(nums, 3);
console.log(nums);
