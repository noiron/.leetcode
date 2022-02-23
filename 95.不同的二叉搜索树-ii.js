/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
// https://leetcode.com/problems/unique-binary-search-trees-ii/discuss/31494/A-simple-recursive-solution
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function genTrees(start, end) {
    const list = [];
    if (start > end) {
      list.push(null);
      return list;
    }

    for (let i = start; i <= end; i++) {
      const left = genTrees(start, i - 1);
      const right = genTrees(i + 1, end);

      for (const lnode of left) {
        for (const rnode of right) {
          const root = new TreeNode(i);
          root.left = lnode;
          root.right = rnode;
          list.push(root);
        }
      }
    }

    return list;
  }

  return genTrees(1, n);
};
// @lc code=end
