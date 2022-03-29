/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = [];

  const restore = (startIndex, current) => {
    if (startIndex === s.length && current.length === 4) {
      result.push(current.join('.'));
      return;
    }
    if (current.length > 4) return;

    // 依次尝试长度为1~3的子字符串
    for (let i = 1; i <= 3; i++) {
      const subStr = s.slice(startIndex, startIndex + i);
      if (+subStr > 255) return;
      if (s[startIndex] === '0' && i > 1) return;
      restore(startIndex + i, [...current, subStr]);
    }
  };

  restore(0, []);
  return result;
};
// @lc code=end

const result = restoreIpAddresses('25525511135');
console.log('result: ', result);
