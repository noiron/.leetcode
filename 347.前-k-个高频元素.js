/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 统计每个数字出现的频率
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  // 按照频率将数字分配到数组中去
  const arr = [];
  const keys = map.keys();
  for (let num of keys) {
    const times = map.get(num); // num 出现的次数
    if (arr[times]) {
      arr[times].push(num);
    } else {
      arr[times] = [num];
    }
  }

  const result = [];
  for (let i = arr.length - 1; i >= 0 && result.length < k; i--) {
    if (arr[i]) {
      result.push(...arr[i]);
    }
  }

  return result;
};

// @lc code=end

console.log(topKFrequent([1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3], 2));
