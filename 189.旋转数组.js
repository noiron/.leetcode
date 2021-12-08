/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;

  function reverse(start, end) {
    while (start < end) {
      const temp = nums[end];
      nums[end] = nums[start];
      nums[start] = temp;
      start++;
      end--;
    }
  }

  reverse(0, n - 1);
  reverse(0, (k % n) -1);
  reverse(k % n, n - 1)
};;
// @lc code=end

const nums = [1, 2];
rotate(nums, 5);
console.log(nums);

