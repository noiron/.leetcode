/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordLength = words[0].length;

  const wordsMap = new Map();
  for (const word of words) {
    if (!wordsMap.has(word)) {
      wordsMap.set(word, 1);
    } else {
      wordsMap.set(word, wordsMap.get(word) + 1);
    }
  }

  const result = [];
  for (let i = 0; i + wordLength * words.length - 1 < s.length; i++) {
    if (isSubstring(s.slice(i, i + wordLength * words.length))) {
      result.push(i);
    }
  }
  return result;

  function isSubstring(substring) {
    const map = new Map();
    for (let i = 0; i < substring.length - wordLength + 1; i += wordLength) {
      const word = substring.slice(i, i + wordLength);
      if (!wordsMap.has(word)) return false;

      if (!map.has(word)) {
        map.set(word, 1);
      } else {
        map.set(word, map.get(word) + 1);
      }

      if (map.get(word) > wordsMap.get(word)) return false;
    }
    return true;
  }
};
// @lc code=end

findSubstring(
  "wordgoodgoodgoodbestword",
["word","good","best","good"]
)
