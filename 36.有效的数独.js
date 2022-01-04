/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 按行
  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value === '.') continue;
      if (set.has(value)) {
        return false;
      }
      set.add(value);
    }
  }

  // 按列
  for (let j = 0; j < 9; j++) {
    const set = new Set();
    for (let i = 0; i < 9; i++) {
      const value = board[i][j];
      if (value === '.') continue;
      if (set.has(value)) {
        return false;
      }
      set.add(value);
    }
  }

  const starts = [];
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      starts.push([i, j]);
    }
  }
  // console.log(starts);

  for (let start of starts) {
    const set = new Set();
    for (let i = start[0]; i < start[0] + 3; i++) {
      for (let j = start[1]; j < start[1] + 3; j++) {
        const value = board[i][j];
        if (value !== '.') {
          if (set.has(value)) {
            return false;
          }
          set.add(value);
        }
      }
    }
  }

  return true;
};
// @lc code=end

isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);
