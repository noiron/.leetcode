/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // tails[i] 表示长度为 i + 1 的上升子序列结尾元素的可能最小值
  // tails 是一个严格上升数组
  const tails = [];

  for (const num of nums) {
    // 在 tails 中找到第一个大于 num 的数（假设为第 k + 1 个数）
    // 前面的k个数 < num < tails[k] < tails[k] 后面的数
    // 将 tails[k] 替换为 num 后，tails 仍然保持严格上升，已经找到的子序列长度保持不变
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
    if (tails.length === right) {
      tails.push(num);
    }
  }

  return tails.length;
};
// @lc code=end

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
