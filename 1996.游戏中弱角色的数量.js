/*
 * @lc app=leetcode.cn id=1996 lang=javascript
 *
 * [1996] 游戏中弱角色的数量
 */

// @lc code=start
/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  properties.sort((charcter1, charcter2) => {
    if (charcter1[0] === charcter2[0]) {
      // 攻击力相同时，按防御力升序排序
      return charcter1[1] - charcter2[1];
    }
    // 攻击降序
    return charcter2[0] - charcter1[0];
  });

  let result = 0;
  let maxDef = 0;
  // 从前往后遍历，前面的角色的攻击一定大于等于当前角色的攻击
  for (const p of properties) {
    // 因为同一攻击力的角色的防御力是升序的，所以前面出现的更高防御角色一定和当前元素有着不同的攻击力
    // [6, 1], [6, 10], [5, 2], [5, 3], [5, 4]
    // 对于 [5, 3] 来说，10 > 3，10 对应的攻击力（6）也一定大于 5
    // 同一攻击力的元素 [5, 4]，4 > 3，一定出现在后面
    // 如果还有一个完全一样的元素，[5, 3] 则不满足防御力的比较
    if (p[1] < maxDef) {
      result++;
    } else {
      maxDef = p[1];
    }
  }

  return result;
};
// @lc code=end
