/*
 * @lc app=leetcode id=894 lang=javascript
 *
 * [894] All Possible Full Binary Trees
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  const result = [];

  if (n <= 0) return [];

  if (n === 1) {
    result.push(new TreeNode(0));
  }

  for (let i = 0; i < n; i += 2) {
    const leftSubTrees = allPossibleFBT(i);
    const rightSubTrees = allPossibleFBT(n - i - 1);

    leftSubTrees.forEach((l) => {
      rightSubTrees.forEach((r) => {
        const root = new TreeNode(0);
        root.left = l;
        root.right = r;
        result.push(root);
      });
    });
  }

  return result;
};
// @lc code=end
