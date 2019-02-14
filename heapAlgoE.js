class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const lastParentIdx = Math.floor((array.length - 1) / 2);
    //heapify down
    for (let i = lastParentIdx; i >= 0; i--) {
      this.siftDown(i, array);
    }

    return array;
  }

  siftDown(currIdx, heap) {
    //keep comparing with children, swapped with the smallest, then check again 
    //if any children and keep continuing
    let childOneIdx = currIdx * 2 + 1;

    while (childOneIdx < heap.length) {
      let childTwoIdx = currIdx * 2 + 2 < heap.length ? currIdx * 2 + 2 : -1;
      let smallChildIdx = childOneIdx;

      if (childTwoIdx !== -1) {
        smallChildIdx = heap[childOneIdx] <= heap[childTwoIdx] ? childOneIdx : childTwoIdx;
      }

      if (heap[currIdx] > heap[smallChildIdx]) {
        let temp = heap[smallChildIdx];
        heap[smallChildIdx] = heap[currIdx];
        heap[currIdx] = temp;
        currIdx = smallChildIdx;
        childOneIdx = currIdx * 2 + 1;
      } else {
        return;
      }

    }


  }

  siftUp(childIdx) {
    // just compare with parent and keep heapifying up
    let parentIdx = Math.floor((childIdx - 1)/2);

  while (parentIdx >= 0) {

    if ((this.heap[parentIdx] > this.heap[childIdx])) {
      let temp = this.heap[parentIdx];
      this.heap[parentIdx] = this.heap[childIdx];
      this.heap[childIdx] = temp;
      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1)/2);
    } else {
      return;
    }
    
  }

  }

  peek() {
    // return the first one in the array
  }

  remove() {
    // swap first and last element. pop off last element 
    //heapify down
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);

  }
}

let a = new MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]);
a.insert(76);
a.insert(-10);
a.insert(0);
console.log(a.heap);

