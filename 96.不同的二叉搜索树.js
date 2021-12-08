/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;

  for (let len = 2; len <= n; len++) {
    for (let i = 1; i <= len; i++) {
      G[len] += G[i - 1] * G[len - i];
    }
  }

  return G[n];
};
// @lc code=end

numTrees(3);