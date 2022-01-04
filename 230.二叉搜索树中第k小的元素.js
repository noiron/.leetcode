/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  // 计算以 root 为根节点的树中有多少个节点
  const count = (root) => {
    if (!root) return 0;
    return count(root.left) + 1 + count(root.right);
  }

  const leftCount = count(root.left);
  if (leftCount > k - 1) {
    return kthSmallest(root.left, k);
  }

  if (leftCount === k - 1) return root.val;

  return kthSmallest(root.right, k - leftCount - 1);
};
// @lc code=end

