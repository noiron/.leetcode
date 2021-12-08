/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function check(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    return p.val === q.val;
  }

  const queueP = [p];
  const queueQ = [q];
  while (queueP.length > 0) {
    const p = queueP.shift();
    const q = queueQ.shift();

    if (!check(p, q)) return false;
    if (p !== null) {
      if (!check(p.left, q.left)) {
        return false;
      }
      if (p.left) {
        queueP.push(p.left);
        queueQ.push(q.left);
      }
      if (!check(p.right, q.right)) {
        return false;
      }
      if (p.right) {
        queueP.push(p.right);
        queueQ.push(q.right);
      }
    }
  }

  return true;
};
// @lc code=end
