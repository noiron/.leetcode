/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const path = [];
  const len = nums.length;
  // used 是一个布尔值的数组，每一位代表 nums 中的对应位置的数字是否已使用
  const used = new Array(len).fill(false);

  function backtrack() {
    if (path.length === len) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < len; i++) {
      // 如果这个数字已使用，则检查下一个数字
      if (used[i]) continue;

      path.push(nums[i]);
      used[i] = true;
      backtrack();
      path.pop();
      used[i] = false;
    }
  }

  backtrack();
  return result;
};

// @lc code=end

permute([1, 2, 3]);
