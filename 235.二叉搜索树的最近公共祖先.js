/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const diffP = root.val - p.val;
  const diffQ = root.val - q.val;

  const multi = diffP * diffQ;
  if (multi <= 0) return root;

  if (diffP > 0) return lowestCommonAncestor(root.left, p, q);

  return lowestCommonAncestor(root.right, p, q);
};
// @lc code=end

