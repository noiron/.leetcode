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
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      let ptr = 0;
      while (slow !== ptr) {
        slow = nums[slow];
        ptr = nums[ptr];
      }
      return slow;
    }
  }
};
// @lc code=end
