/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 1;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[mid-1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right - 1;
};
// @lc code=end

console.log(
  peakIndexInMountainArray([0, 1, 0]) === 1,
  peakIndexInMountainArray([0, 2, 1, 0]) === 1,
  peakIndexInMountainArray([0, 10, 5, 2]) === 1,
  peakIndexInMountainArray([3,4,5,1]) === 2,
  peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]) === 2
);
