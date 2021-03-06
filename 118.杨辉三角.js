/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [[1]];
  for (let i = 1; i < numRows; i++) {
    const row = new Array(i+1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = result[i-1][j-1] + result[i-1][j];
    }
    result.push(row);
  }

  return result;
};
// @lc code=end

generate(5);