/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const count = liveNeighbor(i, j);
      if (board[i][j] === 1) {
        // live -> dead -> -1
        if (count < 2 || count > 3) board[i][j] = -1;
      } else if (count === 3) {
        // dead -> live -> 2
        board[i][j] = 2;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) board[i][j] = 1;
      if (board[i][j] === -1) board[i][j] = 0;
    }
  }

  function liveNeighbor(row, col) {
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      if (i < 0 || i >= m) continue;
      for (let j = col - 1; j <= col + 1; j++) {
        if (j < 0 || j >= n) continue;
        if (i === row && j === col) continue;
        if (board[i][j] === 1 || board[i][j] === -1) {
          count++;
        }
      }
    }
    return count;
  }
};
// @lc code=end

