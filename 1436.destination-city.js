/*
 * @lc app=leetcode id=1436 lang=javascript
 *
 * [1436] Destination City
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let end = paths[0][1];
  do {
    let found = false;
    for (let i = 0; i < paths.length; i++) {
      const current = paths[i];
      if (current[0] === end) {
        end = current[1];
        found = true;
        break;
      }
    }
    if (!found) return end;
  } while (true);
};
// @lc code=end
