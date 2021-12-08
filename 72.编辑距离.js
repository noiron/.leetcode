/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;

  if (len1 * len2 === 0) return len1 + len2;

  const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1));

  for (let i = 0; i < len1 + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < len2 + 1; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i < len1 + 1; i++) {
    for (let j = 1; j < len2 + 1; j++) {
      const diff1 = dp[i - 1][j] + 1;
      const diff2 = dp[i][j - 1] + 1;
      let diff3 = dp[i - 1][j - 1];
      if (word1[i - 1] !== word2[j - 1]) {
        diff3 += 1;
      }
      dp[i][j] = Math.min(diff1, diff2, diff3);
    }
  }

  return dp[len1][len2];
};
// @lc code=end

console.log(minDistance('horse', 'ros'));
