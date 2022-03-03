/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const pathItems = path.split('/');
  const stack = [];

  for (const item of pathItems) {
    if (item === '.' || item === '') continue;

    if (item === '..') {
      stack.pop();
      continue;
    }

    stack.push(item);
  }

  return '/' + stack.join('/');
};
// @lc code=end

console.log(
  simplifyPath("/a/./b/../../c/")
);