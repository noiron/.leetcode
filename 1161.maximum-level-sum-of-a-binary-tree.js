/*
 * @lc app=leetcode id=1161 lang=javascript
 *
 * [1161] Maximum Level Sum of a Binary Tree
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
 * @return {number}
 */
var maxLevelSum = function(root) {
  if (!root) return 1;

  const queue = [root];
  let result = 1;
  let max = -1e6;

  let level = 0;
  while (queue.length > 0) {
    level++;
    // 每个外层循环开始时，queue 的大小即为下一层节点的数量
    const size = queue.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      sum += node.val;
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }

    if (sum > max) {
      max = sum;
      result = level;
    }
  }

  return result;
};
// @lc code=end

