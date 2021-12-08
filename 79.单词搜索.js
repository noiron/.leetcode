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
  const rows = board.length;
  const cols = board[0].length;

  const isVisited = (pos, visisted) => {
    return visisted.some((_pos) => _pos[0] === pos[0] && _pos[1] === pos[1]);
  };

  const isPosValid = (pos) => {
    const [row, col] = pos;
    return row >= 0 && col >= 0 && row < rows && col < cols;
  };

  const check = (str, pos, visisted) => {
    const [row, col] = pos;
    const character = board[row][col];
    if (str[0] !== character) return false;
    if (str.length === 1) return true;

    // 分别检查上右下左四个方向
    const fourDirections = [
      [row - 1, col],
      [row, col + 1],
      [row + 1, col],
      [row, col - 1],
    ].map((pos) => {
      if (!isPosValid(pos)) return false;
      if (isVisited(pos, visisted)) return false;
      return check(str.slice(1), pos, [...visisted, pos]);
    });

    return fourDirections.includes(true);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const pos = [i, j];
      if (check(word, pos, [pos])) {
        return true;
      }
    }
  }
  return false;
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

console.log(exist([['a', 'a']], 'aaa') === false);
