/*
 * @lc app=leetcode.cn id=679 lang=javascript
 *
 * [679] 24 点游戏
 */

// @lc code=start
/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
  const len = cards.length;
  if (len === 1) {
    return Math.abs(cards[0] - 24) < 1e-9;
  }

  let isValid = false;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      // 任选两个数，利用两重循环找出所有的组合
      const n1 = cards[i];
      const n2 = cards[j];

      const restCards = []; // 剩下的数

      for (let k = 0; k < len; k++) {
        if (k !== i && k !== j) {
          restCards.push(cards[k]);
        }
      }

      isValid = isValid || judgePoint24([...restCards, n1 + n2]);
      isValid = isValid || judgePoint24([...restCards, n1 - n2]);
      isValid = isValid || judgePoint24([...restCards, n2 - n1]);
      isValid = isValid || judgePoint24([...restCards, n1 * n2]);
      if (n2 !== 0) {
        isValid = isValid || judgePoint24([...restCards, n1 / n2]);
      }
      if (n1 !== 0) {
        isValid = isValid || judgePoint24([...restCards, n2 / n1]);
      }

      if (isValid) return true;
    }
  }

  return false;
};
// @lc code=end
