/*
 * @lc app=leetcode.cn id=390 lang=javascript
 *
 * [390] 消除游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let left = true;
  let step = 1;
  let head = 1;
  while (n > 1) {
    // 何时改变 head 的值：
    // 1. 从左侧开始移除
    // 2. 从右侧开始移除时，数量奇变偶不变
    if (left || n % 2 === 1) {
      head = head + step;
    }
    n = Math.floor(n / 2);
    step = step * 2;
    left = !left;
  }
  return head;
};
// @lc code=end

