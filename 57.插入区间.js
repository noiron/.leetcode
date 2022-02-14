/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  const len = intervals.length;

  let i = 0;
  // 原有区间在新区间的左侧
  while (i < len && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // 原有区间和新区间有重叠
  // 因为已经退出了上面的 while 循环，所以 interval[i][1] >= newInterval[0] 一定成立
  // 假设无重叠，则还要满足 interval[i][0] > newInterval[1]
  // 则得到了重叠的条件 interval[i][0] <= newInterval[1]
  while (i < len && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  result.push(newInterval);

  while (i < len) {
    result.push(intervals[i]);
    i++;
  }
  
  return result;
};
// @lc code=end
