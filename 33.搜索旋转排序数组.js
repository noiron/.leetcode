/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/273622/Javascript-Simple-O(log-N)-Binary-Search-Solution

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 将数组分成两半时，其中一半必然已排序

    // 检查左边是否已排序
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // target 在左半边
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // 否则右边已排序
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        // target 在右边
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
// @lc code=end
