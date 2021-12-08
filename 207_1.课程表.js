/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const degress = new Array(numCourses).fill(0);

  for (let i = 0; i < prerequisites.length; i++) {
    // console.log('prerequisites: ', prerequisites);
    const course = prerequisites[i][0]; // 对应 degress 数组中的位置
    // console.log('course: ', course);
    degress[course]++;
  }

  console.log('degress: ', degress);

  const queue = [];
  let count = 0;

  for (let i = 0; i < degress.length; i++) {
    if (degress[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    console.log('queue: ', queue);
    const first = queue.shift();
    count++;
    // console.log('count: ', count);

    for (let i = 0; i < prerequisites.length; i++) {
      const p = prerequisites[i];
      if (p && p[1] === first) {
        degress[p[0]]--;
        delete prerequisites[i];
      }
    }

    for (let i = 0; i < degress.length; i++) {
      if (degress[i] === 0) {
        if (queue.indexOf(i) < 0) {
          queue.push(i);
        }
        delete degress[i];
      }
    }
  }

  // console.log('count: ', count);
  // console.log('numCourses: ', numCourses);
  // console.log('count >= numCourses: ', count >= numCourses);
  return count >= numCourses;
};
// @lc code=end

// console.log(canFinish(2, [[1, 0]]) === true);
// console.log(
//   canFinish(2, [
//     [1, 0],
//     [0, 1],
//   ]) === false
// );
// console.log(
//   canFinish(4, [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//   ]) === true
// );

console.log(
  canFinish(20, [
    [0, 10],
    [3, 18],
    [5, 5],
    [6, 11],
    [11, 14],
    [13, 1],
    [15, 1],
    [17, 4],
  ]) === false
);
