/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0];
  
  let prefix = '';
  for (let i = 1; i <= strs[0].length; i++) {
    const _prefix = strs[0].slice(0, i);
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(_prefix)) {
        return prefix;
      }
    }
    prefix = _prefix;
  }
  return prefix;
};
// @lc code=end

console.log(longestCommonPrefix(["flower","flower","flower","flower"]
));

