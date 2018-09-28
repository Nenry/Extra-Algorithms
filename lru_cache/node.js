class Node {
  constructor(value = null) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }

  remove() {
    this.prev.next = this.next;
    this.next.prev = this.prev;
  }
}

module.exports = Node;