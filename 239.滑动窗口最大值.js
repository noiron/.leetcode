/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const len = nums.length;
  const queue = []; // 元素单调递减，存储的是 nums 中元素的下标

  const result = [];
  // i 代表的是窗口的右边界
  for (let i = 0; i < len; i++) {
    // 入队的元素需小于队内的最后一个元素
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);

    if (i < k - 1) {
      continue;
    }

    // 第一个元素不在窗口内，则移除
    if (queue[0] <= i - k) {
      queue.shift();
    }
    result.push(nums[queue[0]]);
  }

  return result;
};
// @lc code=end
