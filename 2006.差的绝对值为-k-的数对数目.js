/*
 * @lc app=leetcode.cn id=2006 lang=javascript
 *
 * [2006] 差的绝对值为 K 的数对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let result = 0;
  const len = nums.length;
  const count = new Map();

  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (count.has(num)) {
      count.set(num, count.get(num) + 1);
    } else {
      count.set(num, 1);
    }

    const target1 = num + k;
    if (count.has(target1)) {
      result += count.get(target1);
    }
    const target2 = num - k;
    if (count.has(target2)) {
      result += count.get(target2);
    }
  }

  return result;
};
// @lc code=end
