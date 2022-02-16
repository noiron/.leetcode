/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = [];
  const board = new Array(n).fill([]).map(() => new Array(n).fill('.'));

  function isValid(row, col, board, n) {
    // 检查同一列
    for (let i = 0; i < n; i++) {
      if (board[i][col] === 'Q') return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < 0; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
  
    return true;
  }

  function transformBoard(board) {
    let chessBoard = [];
    for (const row of board) {
      chessBoard.push(row.join(''));
    }
    return chessBoard;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(transformBoard(board));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, board, n)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  }

  backtrack(0, board)
  return result
};
// @lc code=end

solveNQueens(4);
