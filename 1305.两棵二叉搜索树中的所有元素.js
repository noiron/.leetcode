/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  return merge(traverseTree(root1), traverseTree(root2));
};

function traverseTree(root) {
  if (!root) return [];
  return [...traverseTree(root.left), root.val, ...traverseTree(root.right)];
}

function merge(nums1, nums2) {
  let i = 0;
  let j = 0;
  const list = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      list.push(nums1[i++]);
    } else {
      list.push(nums2[j++]);
    }
  }

  while (i < nums1.length) {
    list.push(nums1[i++]);
  }
  while (j < nums2.length) {
    list.push(nums2[j++]);
  }
  return list;
}
// @lc code=end
