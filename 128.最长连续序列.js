/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longestStreak = 0;
  
  for (const num of numSet) {
    // 如果遇到了 num，就依次检查 num+1, num+2... 是否存在
    // 如果 num-1 存在，说明遇到 num-1 的时候（可能在之前也可能在之后）也会检查 num，这里可以跳过
    if (numSet.has(num - 1)) continue;

    let currentStreak = 1;
    let currentNum = num + 1;

    while (numSet.has(currentNum)) {
      currentStreak++;
      currentNum++;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }
  return longestStreak;
};
// @lc code=end

longestConsecutive([0,3,7,2,5,8,4,6,0,1]);
