class Stack{
  constructor() {
    this.items = [];
    this.max = [];
    this.length = this.items.length;
  }

  add(num) {
    this.items.push(num);
    if (this.max === undefined) {
      this.max.push([this.max[0], num]);
    } else if (this.max[this.length - 1] < num) {
      this.max.push([this.max[this.length - 1], num]);
    }
  }

  peekMax() {
    return this.max[this.length - 1][1];
    //gets max value
  }

  pop() {
    const popped = this.items.pop();
    if (popped === this.peek()) {
      this.max.pop();
    }

    return popped;
  }

  isEmpty() {
    return this.length === 0;
  }

}


class Node {
  constructor(value = null) {

    this.value = value;
    this.next = null;
    this.prev = null;
  }
}


class Stack {
  constructor() {
    this.top = null;
  
  }

  add(val) {
    const newNode = new Node(val);

    if (this.top === null) {
      this.top = newNode;
    } else {
      this.top.next = newNode;
      newNode.prev = this.top;
      this.top = newNode;
    }
  }

  pop() {
    const popped = this.top;
    this.top = this.top.prev;
    return popped;
  }
}


class StackQueue {
  //implement a queue only using pop and push (stack)
  //queue is first in first out
  constructor() {
    this.in = [];
    this.out = [];
  }

  queue(val) {
    this.in.push(val);
  }

  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }

    return this.out.pop();
  }

}