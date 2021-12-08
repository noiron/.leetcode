/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const len = s.length;
  const wordSet = new Set(wordDict);
  const memo = new Array(len);

  // 检查从start至末尾的子串能否break
  const canBreak = (start) => {
    if (start === len) return true;

    if (memo[start] !== undefined) return memo[start];

    for (let i = start + 1; i <= len; i++) {
      const prefix = s.slice(start, i);
      if (wordSet.has(prefix) && canBreak(i)) {
        memo[start] = true;
        return true;
      }
    }
    memo[start] = false;
    return false;
  };

  return canBreak(0);
};
// @lc code=end

console.log(
  wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']) === false
);

console.log(wordBreak('applepenapple', ['apple', 'pen']) === true);

console.log(
  wordBreak(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
    [
      'a',
      'aa',
      'aaa',
      'aaaa',
      'aaaaa',
      'aaaaaa',
      'aaaaaaa',
      'aaaaaaaa',
      'aaaaaaaaa',
      'aaaaaaaaaa',
    ]
  ) === false
);
