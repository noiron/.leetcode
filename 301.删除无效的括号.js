/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  if (isValid(s)) return [s];

  const res = [];
  const queue = [s]; // queue 中放的都是不合法的组合，需要从中删除括号
  const visisted = new Set();

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const currStr = queue.shift();

      // 从当前的字符串中删除一个括号，依次从所有的位置尝试
      for (let removeIndex = 0; removeIndex < currStr.length; removeIndex++) {
        if (currStr[removeIndex] === '(' || currStr[removeIndex] === ')') {
          const nextStr =
            currStr.slice(0, removeIndex) + currStr.slice(removeIndex + 1);
          if (!visisted.has(nextStr)) {
            visisted.add(nextStr);
            if (isValid(nextStr)) {
              res.push(nextStr);
            } else {
              queue.push(nextStr);
            }
          }
        }
      }
    }

    if (res.length > 0) {
      break;
    }
  }

  return res;
};

const isValid = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++;
    } else if (s[i] === ')') {
      count--;
    }

    if (count < 0) return false;
  }

  return count === 0;
};

// @lc code=end

// console.log(removeInvalidParentheses(')('));
// console.log(removeInvalidParentheses('((()'));
// console.log(removeInvalidParentheses('()())()'));
