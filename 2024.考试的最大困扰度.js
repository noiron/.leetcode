/*
 * @lc app=leetcode.cn id=2024 lang=javascript
 *
 * [2024] 考试的最大困扰度
 */

// @lc code=start
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  // 找到一段区间，其中的 char 字符的出现次数不超过 k
  function getMaxRange(char) {
    let left = 0;
    let right = 0;
    let currentCount = 0; // 当前区间中 char 出现的次数
    let maxRange = 0; // 区间的最大长度
    while (right < answerKey.length) {
      if (answerKey[right] === char) {
        currentCount++;
      }
      while (currentCount > k) {
        if (answerKey[left++] === char) {
          currentCount--;
        }
      }
      maxRange = Math.max(maxRange, right - left + 1);
      right++;
    }
    return maxRange;
  }

  return Math.max(getMaxRange('T'), getMaxRange('F'));
};
// @lc code=end
