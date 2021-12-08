/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = [...nums];
  this.current = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.current = [...this.original];
  return this.current;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const len = this.current.length;
  for (let i = 0; i < len - 1; i++) {
    const choose = Math.floor(Math.random() * (len - i)) + i;
    [this.current[i], this.current[choose]] = [
      this.current[choose],
      this.current[i],
    ];
  }
  return this.current;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
