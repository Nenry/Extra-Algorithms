class Node {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  first() {
    this.head;
  }

  last() {
    this.tail;
  }

  isEmpty() {
    this.head === null && this.tail === null;
  }
}