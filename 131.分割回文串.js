/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left++] !== s[right--]) return false;
  }
  return true;
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const path = [];
  const len = s.length;

  function backtrack(start) {
    if (start >= len) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < len; i++) {
      if (!isPalindrome(s, start, i)) continue;
      path.push(s.slice(start, i + 1));
      backtrack(i + 1);
      path.pop();
    }
  }

  backtrack(0);
  return result;
};
// @lc code=end
