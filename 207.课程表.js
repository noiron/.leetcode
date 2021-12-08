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
  const inDegrees = new Array(numCourses).fill(0);
  const adjMap = {}; // 以一门课程为 key，保存依赖这门课程的课程

  for (let i = 0; i < prerequisites.length; i++) {
    const [afterCourse, beforeCourse] = prerequisites[i];
    if (adjMap[beforeCourse]) {
      adjMap[beforeCourse].push(afterCourse);
    } else {
      adjMap[beforeCourse] = [afterCourse];
    }
    inDegrees[afterCourse]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegrees[i] === 0) queue.push(i);
  }

  let count = 0;

  while (queue.length > 0) {
    const finishedCourse = queue.shift();
    count++;
    const afterCoures = adjMap[finishedCourse];

    if (afterCoures && afterCoures.length) {
      for (let i = 0; i < afterCoures.length; i++) {
        inDegrees[afterCoures[i]]--;
        if (inDegrees[afterCoures[i]] === 0) {
          queue.push(afterCoures[i]);
        }
      }
    }
  }

  return count === numCourses;
};
// @lc code=end

console.log(
  canFinish(4, [
    [0, 1],
    [1, 2],
    [2, 3],
  ]) === true
);

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