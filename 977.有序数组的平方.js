/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length;
  let negative = -1;

  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      negative = i;
    } else {
      break;
    }
  }

  const ans = [];
  let i = negative,
    j = negative + 1,
    index = 0;

  while (i >= 0 || j < n) {
    if (i < 0) {
      // 指针到达左侧尽头，将右侧剩余的元素放入
      ans.push(nums[j] * nums[j]);
      j++;
    } else if (j >= n) {
      // 指针到达右侧尽头，将左侧剩余的元素放入
      ans.push(nums[i] * nums[i]);
      i--;
    } else if (-nums[i] < nums[j]) {
      ans.push(nums[i] * nums[i]);
      i--;
    } else {
      ans.push(nums[j] * nums[j]);
      j++;
    }
    index++;
  }

  return ans;
};
// @lc code=end
