/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start

var MinStack = function () {
  this.stack = [];
  this.minStack = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.minStack.push(Math.min(this.minStack.at(-1), val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStack.pop();
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack.at(-1);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
