class BinaryMinHeap {
  constructor() {
    this.store = [];
  }

  count() {
    return this.store.length;
  }

  extract() {
    //index 0 will be the min, swap with last idx in array. Pop then will need to heapify down
    if (this.count() > 0) {
      let temp = this.store[0];
      this.store[0] = this.store[this.count() - 1];
      this.store[this.count() - 1] =  temp;
      temp = this.store.pop();
      console.log('this');
      this.heapifyDown();
      console.log('that');  
      return temp;
    }
    //pop off the min
    //swap first and last element, pop off
    //heapify down

  }

  peek() {
    return this.store[0];
  }

  insert(val) {
    this.store.push(val);
    this.heapifyUp();
  }

  heapifyDown() {
    let parentIdx = 0;
    let childIdx = this.getChildIndices(parentIdx);
    console.log(childIdx);
    let swapIdx;
    
    while (childIdx.length > 0) {
        console.log(childIdx);
      const leftChildIdx = childIdx[0];
      const rightChildIdx = childIdx[1];
      if (this.store[parentIdx] >= this.store[leftChildIdx]) {
        if (this.store[rightChildIdx]) {
          swapIdx = this.store[leftChildIdx] < this.store[rightChildIdx] ? leftChildIdx : rightChildIdx;
        } else {
          swapIdx = leftChildIdx;
        }
      }

      let temp = this.store[parentIdx]
      this.store[parentIdx] = this.store[swapIdx];
      this.store[swapIdx] = temp;

      parentIdx = swapIdx;
      childIdx = this.getChildIndices(parentIdx); 
    }

  }

  heapifyUp() {
    let childIdx = this.count() - 1;
    let parentIdx = this.getParentIndex(childIdx);

    while (this.store[childIdx] < this.store[parentIdx]) {
      let temp = this.store[childIdx];
      this.store[childIdx] = this.store[parentIdx];
      this.store[parentIdx] = temp;

      childIdx = parentIdx;
      parentIdx = this.getParentIndex(childIdx);
    }

  }

  getChildIndices(parentIdx) {
    const results = [];

    const leftChild = (2 * parentIdx + 1);
    const rightChild = (2 * parentIdx + 2);

    if (this.store[leftChild]) {
      results.push(leftChild);
    }

    if (this.store[rightChild]) {
      results.push(rightChild);
    }
    
    
    return results;
  }
  
  getParentIndex(childIdx) {
    return (Math.floor(childIdx - 1)/2);
  }

}


const test = new BinaryMinHeap();

test.insert(1);
test.insert(3);
test.insert(7);
test.insert(5);
test.insert(4);
test.insert(8);
test.insert(9);
test.insert(2);
test.insert(6);
// test.extract();

console.log(test.store);