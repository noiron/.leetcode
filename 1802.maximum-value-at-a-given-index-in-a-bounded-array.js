/*
 * @lc app=leetcode id=1802 lang=javascript
 *
 * [1802] Maximum Value at a Given Index in a Bounded Array
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  function getSum(max) {
    function foo(num) {
      if (num <= max) {
        return ((max * 2 - num + 1) * num) / 2;
      } else {
        return ((max + 1) * max) / 2 + (num - max);
      }
    }
    return foo(index + 1) + foo(n - index) - max;
  }

  let left = 0;
  let right = maxSum + 1;

  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (getSum(mid) <= maxSum) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right - 1;
};
// @lc code=end

// 6\n1\n10 3
// 3\n2\n18 7
// 8\n7\n14 4
// 10\n4\n584357597 58435762

console.log(
  maxValue(8, 1, 244197066) === 30524636,
  maxValue(10, 4, 584357597) === 58435762,
  maxValue(8, 7, 14) === 4,
  maxValue(4, 0, 4) === 1,
  maxValue(9, 3, 16) === 3,
  maxValue(6, 1, 10) === 3,
  maxValue(1, 0, 1000000000) === 1000000000
);
