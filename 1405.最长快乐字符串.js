/*
 * @lc app=leetcode.cn id=1405 lang=javascript
 *
 * [1405] 最长快乐字符串
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let result = '';

  function isValid(char) {
    const len = result.length;
    if (len < 2) return true;
    if (result[len - 1] === char && result[len - 2] === char) return false;
    return true;
  }

  // 将 a, b, c 排序
  const list = [
    { char: 'a', count: a },
    { char: 'b', count: b },
    { char: 'c', count: c },
  ];

  while (true) {
    const validList = list
      .filter((item) => item.count > 0)
      .filter((item) => isValid(item.char));

    validList.sort((a, b) => b.count - a.count);

    if (validList.length === 0) return result;

    const char = validList[0].char;
    result += char;
    const index = list.findIndex((item) => item.char === char);
    list[index].count--;
  }
};
// @lc code=end

longestDiverseString(1, 1, 7);
