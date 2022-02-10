/*
 * @lc app=leetcode.cn id=983 lang=javascript
 *
 * [983] 最低票价
 */

// @lc code=start
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const maxDay = days.at(-1);
  const minDay = days[0];
  // dp 中保存的是从后往前遍历时，累计的总票价
  const dp = new Array(maxDay + 31).fill(0);
  const daysSet = new Set(days);

  // 从后往前遍历
  for (let day = maxDay; day >= minDay; day--) {
    if (daysSet.has(day)) {
      // 如果必须覆盖这一天，则需要考虑买哪一种票
      dp[day] = Math.min(
        dp[day + 1] + costs[0], // 买日票，覆盖 [day] 共一天
        dp[day + 7] + costs[1], // 买周票，覆盖 [day, day + 6]，共7天
        dp[day + 30] + costs[2] // 买月票，覆盖 [day, day + 29]，共30天
      );
    } else {
      // 如果当天不需要买票，那么累计的票价和后一天是一样的
      dp[day] = dp[day + 1];
    }
  }
  return dp[minDay];
};
// @lc code=end

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
