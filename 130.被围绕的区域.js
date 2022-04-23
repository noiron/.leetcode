/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // 递归 DFS
  // 从边界开始 DFS，将和边界联通的 O 换成 #。完成遍历后，将剩余的 O 改为 X。

  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        if (board[i][j] === 'O') {
          dfs(i, j);
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
      if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }

  function dfs(i, j) {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      board[i][j] === 'X' ||
      board[i][j] === '#'
    ) {
      return;
    }
    board[i][j] = '#';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
};
// @lc code=end
