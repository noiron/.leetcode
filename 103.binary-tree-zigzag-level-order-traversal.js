/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  let order = true;
  while (queue.length > 0) {
    const level = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (order) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    order = !order;
    result.push(level);
  }

  return result;
};
// @lc code=end

// [1,2,3,4,null,null,5]
// [[1],[3,2],[4,5]]