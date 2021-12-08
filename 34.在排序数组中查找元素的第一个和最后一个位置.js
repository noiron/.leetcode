/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const len = nums.length;

  const findLeftBound = () => {
    let left = 0;
    let right = len;

    // 搜索区间需要包含第一个等于 target 的数，左闭右开区间
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        right = mid;
      } else if (nums[mid] > target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    if (left >= len) return -1;
    return nums[left] === target ? left : -1;
  };

  const findRightBound = () => {
    if (nums.length === 0) return -1;
    let left = 0;
    let right = len;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return nums[left - 1] === target ? left - 1 : -1;
  };

  return [findLeftBound(), findRightBound()];
};
// @lc code=end

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
