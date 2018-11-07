//implement a queue using stacks, a queue order is first in first out

class StackQueue{
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(item) {
    this.in.push(item);
  }

  dequeue() {
    if (this.out,length === 0) {
      
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }

    this.out.pop();
  }


}