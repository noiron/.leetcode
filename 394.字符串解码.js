/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    // console.log(stack);
    if (/\d/.test(s[i])) {
      stack.push(s[i]);
    } else if (s[i] !== ']') {
      stack.push(s[i]);
    } else {
      // 碰到 ]，开始出栈
      let top = stack.pop();
      let str = '';
      while (top !== '[') {
        str = top + str;
        top = stack.pop();
      }

      // 数字可能有多位
      let times = '';
      top = stack.pop();
      while (/\d/.test(top)) {
        times = top + times;
        top = stack.pop();
      }
      // 上面获取数字时多 pop 了一次，重新放回去
      if (top !== undefined) {
        stack.push(top);
      }
      stack.push(str.repeat(+times));
    }
  }
  return stack.join('');
};
// @lc code=end

console.log(decodeString('3[a2[c]]'));
console.log(decodeString('100[leetcode]'));
