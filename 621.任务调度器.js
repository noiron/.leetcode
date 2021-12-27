/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const count = {};
  const taskLen = tasks.length;
  for (let i = 0; i < taskLen; i++) {
    const task = tasks[i];
    if (!count[task]) {
      count[task] = 1;
    } else {
      count[task]++;
    }
  }

  const values = Object.values(count);
  values.sort((a, b) => b - a);
  const maxCount = values[0];
  let x = 1;  // 最后一桶的任务数，即次数等于最大数量的任务有几种
  for (let i = 1; i < values.length; i++) {
    if (values[i] === maxCount) {
      x++;
    } else {
      break;
    }
  }

  const n1 = (maxCount - 1) * (n + 1) + x;
  return Math.max(n1, taskLen);
};
// @lc code=end

leastInterval(['A', 'A', 'A', 'A', 'B', 'B', 'B'], 2);
