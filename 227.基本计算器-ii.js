/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(/\s/g, '');
  const stack = [];
  
  let lastChar = '';
  let i = 0;
  while (i < s.length) {
    const char = s[i];
    if (char === '+') {
      i++
      continue;
    }

    if (!/\d/.test(s[i])){
      lastChar = char;
      i++;
      continue;
    }

    let num = '';
    while (/\d/.test(s[i]) && i < s.length) {
      num += s[i];
      i++;
    }
    if (num) {
      if (lastChar === '*') {
        stack.push(num * stack.pop());
      } else if (lastChar === '/') {
        stack.push(Math.trunc(stack.pop() / num));
      } else if (lastChar === '-') {
        stack.push(-num);
      } else {
        stack.push(num);
      }
      lastChar = '';
    }
  }
  return stack.reduce((prev, curr) => Number(prev) + Number(curr), 0);
};
// @lc code=end

console.log(
  calculate(" 3+5 / 2 ")
)

console.log(
  calculate('1-1+1')
);