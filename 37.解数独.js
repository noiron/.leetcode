/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  const n = board.length;
  dfs();

  function dfs() {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (board[row][col] !== '.') continue;

        // 依次尝试每一个数字
        for (let i = 1; i <= n; i++) {
          const char = i.toString();
          if (isValid(row, col, char)) {
            board[row][col] = char;
            if (dfs()) return true;
          }
        }

        board[row][col] = '.';
        return false;
      }
    }
    return true;
  }

  function isValid(row, col, char) {
    const blockRow = Math.floor(row / 3) * 3;
    const blockCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < n; i++) {
      if (board[row][i] === char || board[i][col] === char) return false;
      const currRow = blockRow + Math.floor(i / 3);
      const currCol = blockCol + Math.floor(i % 3);
      if (board[currRow][currCol] === char) return false;
    }
    return true;
  }
};
// @lc code=end

