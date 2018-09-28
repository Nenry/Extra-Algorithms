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

  append(value) {
    const newNode = new Node(value);
    this.tail.prev.next = newNode;
    newNode.prev = this.tail.prev;

    this.tail.prev = newNode;
    newNode.next = this.tail;
  }

  prepend(value) {
    const newNode = new Node(value);

    this.head.next.prev = newNode;
    newNode.next = this.head.next;

    this.head.next = newNode;
    newNode.prev = this.head;

    return newNode;

  }

  find(value, node = this.head.next) {
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return node;
    } else {
      return this.find(value, node.next);
    }

  }

  remove(value, node = this.head.next) {
    if (node === null) {
      return null;
    }

    if(node.value === value) {
      node.remove();
      return node;
    } else {
      return this.remove(value, node.next);
    }
  }



}

module.exports = LinkedList;