/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const factors = [2, 3, 5];
  const seen = new Set();
  const heap = new MinHeap();
  seen.add(1);
  heap.insert(1);

  let ugly = 0;
  for (let i = 0; i < n; i++) {
    ugly = heap.pop();
    for (const factor of factors) {
      const next = ugly * factor;
      if (!seen.has(next)) {
        seen.add(next);
        heap.insert(next);
      }
    }
  }
  return ugly;
};

// 最小堆
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftIndex(i) {
    return i * 2 + 1;
  }

  getRightIndex(i) {
    return i * 2 + 2;
  }

  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  /** 删除最小值并返回 */
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return this.heap[0];
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
}

// @lc code=end
