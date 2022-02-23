/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let left = 0;
  let right = s.length - 1;
  const arr = s.split('');

  function isChar(char) {
    return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
  }

  while (left < right) {
    while (!isChar(arr[left]) && left < right) {
      left++;
    }
    while (!isChar(arr[right]) && left < right) {
      right--;
    }
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join('');
};
// @lc code=end
