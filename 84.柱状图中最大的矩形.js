/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  const stack = [];
  heights = [0, ...heights, 0];
  for (let i = 0; i < heights.length; i++) {
    // 当前高度比栈顶元素矮，则栈顶元素对应的面积确定了
    while (heights[i] < heights[stack[stack.length - 1]]) {
      // 栈顶元素出栈
      const stackTopIndex = stack.pop();
      maxArea = Math.max(
        maxArea,
        heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)
      )
    }
    // 当前高度比栈顶元素高，入栈
    stack.push(i);
  }
  return maxArea;
};
// @lc code=end

largestRectangleArea([2, 1, 5, 6, 2, 3]);

function printHeight(heights, arr) {
  const h = [];
  for (let i = 0; i < arr.length; i++) {
    h.push(heights[i])
  }
  console.log(h);
}
