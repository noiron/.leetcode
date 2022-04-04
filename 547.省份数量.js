/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    const set = new Set();
    set.add(i);
    const queue = [i];
    while (queue.length) {
      const node = queue.pop();
      visited[node] = true;
      for (let j = 0; j < n; j++) {
        if (!visited[j] && isConnected[node][j]) {
          set.add(j);
          queue.push(j);
        }
      }
    }
    count++;
  }
  return count;
};
// @lc code=end

findCircleNum(
  [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]
)