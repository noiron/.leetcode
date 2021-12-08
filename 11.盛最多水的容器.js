/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length;
  let left = 0;
  let right = len - 1;
  let max = 0;

  while (left < right) {
    const current = Math.min(height[right], height[left]) * (right - left);
    max = Math.max(max, current);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
// @lc code=end
