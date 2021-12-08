/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  // 从低到高排序，先给身高低的找到位置
  people.sort((a, b) => a[0] - b[0]);
  const len = people.length;

  const result = [];
  for (let i = 0; i < len; i++) {
    const person = people[i];
    // 前面需要放 count 个身高大于等于他的人
    let count = person[1];
    for (let j = 0; j < len && count >= 0; j++) {
      const current = result[j];
      // count 为0，则找到第一个空位即可
      if (count === 0 && current === undefined) {
        result[j] = person;
        count--;
      }
      // 下面两种情况 count 减一
      // 遇到空位，留给未排序的人（身高一定大于等于当前的人）
      // 遇到身高大于等于当前者
      if (current === undefined || current[0] >= person[0]) {
        count--;
      }
    }
  }
  return result;
};
// @lc code=end

console.log(
  reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]   )
);

