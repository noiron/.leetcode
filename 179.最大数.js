/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (nums.length === 0) return '';

  const result = nums
    .map((n) => n.toString())
    .sort((a, b) => {
      if (a === b) return 0;
      if (a[0] > b[0]) return -1;
      if (a[0] < b[0]) return 1;
      return Number(b + a) - Number(a + b);
    })
  
  if (result[0] === '0') return '0';
  return result.join('');
};
// @lc code=end

console.log(largestNumber([3, 30, 34]));
