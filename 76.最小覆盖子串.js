/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const map = new Map();
  for (const char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let left = 0;
  let right = 0;
  let minLen = Infinity;
  let result = '';

  while (left <= right && right < s.length) {
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right]) - 1);
    }

    const fulfilled = [...map.values()].every((v) => v <= 0);
    // 没有成功覆盖，则右指针继续右移
    if (!fulfilled) {
      right++;
      continue;
    }

    // 已经成功覆盖，检查是否可以缩短左指针
    let leftCount = map.get(s[left]);
    // 左指针指向的字符次数超过了需要，或者没有使用到这个字符
    while (leftCount < 0 || leftCount === undefined) {
      if (leftCount < 0) {
        map.set(s[left], leftCount + 1);
      }
      left++;
      leftCount = map.get(s[left]);
    }
    const currentLen = right - left + 1;
    if (minLen > currentLen) {
      minLen = currentLen;
      result = s.slice(left, right + 1);
    }
    right++;
  }

  return result;
};
// @lc code=end

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('a', 'aa'));
