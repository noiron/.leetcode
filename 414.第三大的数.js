/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const maxThree = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    insertNum(nums[i]);
  }

  function insertNum(num) {
    if (maxThree.indexOf(num) > -1) return;
    if (maxThree.length < 3) {
      maxThree.push(num);
    } else if (num > maxThree[0]) {
      maxThree[0] = num;
    }
    maxThree.sort((a, b) => a - b);
  }

  if (maxThree.length === 3) {
    return maxThree[0];
  }
  return maxThree[maxThree.length - 1];
};
// @lc code=end
