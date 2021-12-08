/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  const numbers = s.split('');
  let result = '';

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i+2] !== '#') {
      result += String.fromCharCode(+s[i] + 96);
    } else {
      result += String.fromCharCode(+(s[i] + s[i+1]) + 96);
      i = i + 2;
    }
  }
  return result;
};
// @lc code=end

// res.push(String.fromCharCode(+s[i] + 96))

