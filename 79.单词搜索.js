/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const DIRECTIONS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const rows = board.length;
  const cols = board[0].length;
  const len = word.length;
  const visited = new Array(rows)
    .fill(0)
    .map((_) => new Array(cols).fill(false));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;

  function dfs(x, y, begin) {
    if (begin === len - 1) {
      return board[x][y] === word[begin];
    }
    if (board[x][y] === word[begin]) {
      visited[x][y] = true;
      for (const direction of DIRECTIONS) {
        const newX = x + direction[0];
        const newY = y + direction[1];
        if (inArea(newX, newY) && !visited[newX][newY]) {
          if (dfs(newX, newY, begin + 1)) {
            return true;
          }
        }
      }
      visited[x][y] = false;
    }
    return false;
  }

  function inArea(x, y) {
    return x >= 0 && x < rows && y >= 0 && y < cols;
  }
};
// @lc code=end

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE'
  ) === true
);

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'AZDF'
  ) === false
);

console.log(
  exist(
    [
      ['a', 'a'],
      ['c', 'b'],
    ],
    'ab'
  ) === true
);
