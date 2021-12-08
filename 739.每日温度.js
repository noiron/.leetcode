/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const ans = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    const temperature = temperatures[i];

    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperature
    ) {
      const prevIndex = stack.pop();
      ans[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return ans;
};
// @lc code=end
