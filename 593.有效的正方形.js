/*
 * @lc app=leetcode.cn id=593 lang=javascript
 *
 * [593] 有效的正方形
 */

// @lc code=start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  const distSquare = (p1, p2) => {
    const x = p1[0] - p2[0];
    const y = p1[1] - p2[1];
    return x * x + y * y;
  };

  const dists = [
    distSquare(p1, p2),
    distSquare(p1, p3),
    distSquare(p1, p4),
    distSquare(p2, p3),
    distSquare(p2, p4),
    distSquare(p3, p4),
  ];
  
  console.log('dists: ', dists);
  dists.sort();
  console.log('dists: ', dists);


  if (!dists[0] || dists[0] !== dists[1] || dists[1] !== dists[2] || dists[2] !== dists[3]) {
    return false;
  }

  if (dists[4] !== dists[5]) {
    return false;
  }

  if (dists[4] !== 2 * dists[0]) return false;

  return true;
};
// @lc code=end

validSquare([4604, 1524], [4574, 2274], [5354, 1554], [5324, 2304]);
