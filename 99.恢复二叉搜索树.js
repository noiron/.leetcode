/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  // https://leetcode.com/problems/recover-binary-search-tree/discuss/32535/No-Fancy-Algorithm-just-Simple-and-Powerful-In-Order-Traversal
  let firstElement = null;
  let secondElement = null;
  let prevElement = new TreeNode(Number.NEGATIVE_INFINITY);

  const traverse = (root) => {
    if (!root) return;

    traverse(root.left);

    // 因为中序遍历得到的是一个递增的序列
    // 所以找到的第一个元素会大于其后的元素，此时不满足递增要求
    // 找到的第二个元素会小于在它之前的一个元素，此时也不满足递增要求
    if (prevElement.val >= root.val) {
      if (!firstElement) {
        firstElement = prevElement;
      }
      // 注意这里不能用 else 来写，比如 [1, 3, 2, 4] 这个序列
      // 当 root = 2 时，一次比较能确定两个元素
      if (firstElement) {
        secondElement = root;
      }
    }
    prevElement = root;

    traverse(root.right);
  };

  traverse(root);

  // console.log('firstElement: ', firstElement);
  // console.log('secondElement: ', secondElement);

  // 此时交换两个元素的值
  const temp = firstElement.val;
  firstElement.val = secondElement.val;
  secondElement.val = temp;
};
// @lc code=end

// [3, 1, 4, null, null, 2]
