/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const rows = matrix.length;
  if (rows === 0) {
    return 0;
  }

  const cols = matrix[0].length;
  const left = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '1') {
        left[i][j] = (j === 0 ? 1 : left[i][j-1] + 1);
      }
    }
  }

  let ans = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let width = left[i][j];
      let area = width;
      if (matrix[i][j] === '1') {
        for (let k = i - 1; k >= 0; k--) {
          width = Math.min(width, left[k][j]);
          area = Math.max(area, (i - k + 1) * width);
        }
      }
      ans = Math.max(area, ans);
    }
  }

  return ans;
};
// @lc code=end

const a = maximalRectangle(
  [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
  )
  console.log('a: ', a);