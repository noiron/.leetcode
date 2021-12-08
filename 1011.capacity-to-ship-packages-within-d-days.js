/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let left = Math.max(...weights);
  let right = 25e6;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let need = 1;
    let curr = 0;

    for (weight of weights) {
      if (curr + weight > mid) {
        need++;
        curr = 0;
      }
      curr += weight;
    }
    
    if (need > days) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
// @lc code=end

// console.log(
//   shipWithinDays([3, 2, 2, 4, 1, 4], 3),
//   shipWithinDays([1, 2, 3, 1, 1], 4)
// );
