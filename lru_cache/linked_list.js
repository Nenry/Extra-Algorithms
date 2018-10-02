const Node = require('./node');


class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }


//sentinel nodes, head and tail are always null nodes
  first() {
    return this.head.next;
  }

  last() {
    return this.tail.prev;
  }

  isEmpty() {
    return this.head.next === this.tail && this.tail.prev === this.head;
  }

  append(key, value) {
    const newNode = new Node(key, value);
    this.tail.prev.next = newNode;
    newNode.prev = this.tail.prev;

    this.tail.prev = newNode;
    newNode.next = this.tail;
  }

  prepend(key, value) {
    const newNode = new Node(key, value);

    this.head.next.prev = newNode;
    newNode.next = this.head.next;

    this.head.next = newNode;
    newNode.prev = this.head;

    return newNode;

  }

  find(key) {
    let startNode = this.head;

    while (startNode.key !== key || startNode.next === null) {
      startNode = startNode.next;
    }

    if (startNode.next) {
      return startNode.value;
    }
    

  }

  remove(key) {
    let startNode = this.head;

    while (startNode.key !== key || startNode.next === null) {
      startNode = startNode.next;
    }

    if(startNode.next) {
      startNode.remove();
      return startNode;
    }
  }



}

module.exports = LinkedList;