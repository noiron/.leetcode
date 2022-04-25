/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root === null) {
    return 'null';
  }
  const left = serialize(root.left);
  const right = serialize(root.right);
  return root.val + ',' + left + ',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const list = data.split(',');
  let index = 0;
  
  // 返回有两种情况：一种是 null，另一种是左右节点（可能是null）都返回了
  function buildTree() {
    const val = list[index++];
    if (val === 'null') return null;
    const node = new TreeNode(val);
    node.left = buildTree();
    node.right = buildTree();
    return node;
  }

  return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
