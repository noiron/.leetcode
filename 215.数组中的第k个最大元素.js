/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minHeap = new MinHeap(k);
  nums.forEach(num => minHeap.add(num))
  return minHeap.remove();
};

class MinHeap {
  constructor(capacity) {
    this.capacity = capacity;
    this.value = [];
  }

  add(val) {
    this.value.push(val);
    this.bubbleUp(this.value.length - 1);
    if (this.value.length > this.capacity) {
      this.remove();
    }
  }

  remove() {
    this.swap(0, this.value.length - 1);
    const min = this.value.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleUp(index) {
    const parent = Math.floor((index - 1) / 2);
    let max = index;
    if (parent >= 0 && this.value[parent] > this.value[index]) {
      max = parent;
    }
    if (max !== index) {
      this.swap(index, max);
      this.bubbleUp(max);
    }
  }

  bubbleDown(index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let min = index;

    if (left < this.value.length && this.value[left] < this.value[index]) {
      min = left;
    }
    if (right < this.value.length && this.value[right] < this.value[min]) {
      min = right;
    }
    if (min !== index) {
      this.swap(index, min);
      this.bubbleDown(min);
    }
  }

  swap(i, j) {
    [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
  }
}
// @lc code=end
