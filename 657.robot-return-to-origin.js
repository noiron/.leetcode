/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const moveMap = {
    U: 0,
    D: 0,
    L: 0,
    R: 0,
  };

  for (let i = 0; i < moves.length; i++) {
    moveMap[moves[i]]++;
  }

  return moveMap['U'] === moveMap['D'] && moveMap['L'] === moveMap['R'];
};
// @lc code=end
