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
    return this.head;
  }

  last() {
    return this.tail;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  addAtHead(key, val) {
    const newNode = new Node(key, val);

    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.tail;
      this.length ++;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }
  
  addAtTail(key, val) {
    const newNode = new Node(key, val);

    if (this.tail === null) {
      this.tail = newNode;
      newNode.prev = this.head;
      this.length++;
      this.head.next = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  find(val, node = this.head) {
    if (node === null) {
      console.log('Unable to find');
      return;
    }
    else if (node.value === val) {
      return node;
    } else {
      return this.find(val, node.next);
    }
  }


  remove(value, node = this.head) {

    if (node === null) {
      console.log('Does not exist');
      return;
    }
    else if (value === this.tail.value) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.length--;
    }
    else if (node.value === value) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.length--;
    } else {
      this.remove(value, node.next);
    }
  }

}


const a = new LinkedList();
a.addAtHead('ayes', 3);
a.addAtTail('tailz1', 0);
a.addAtTail('tailz2', 5);
a.addAtTail('tailz3', 8);
a.addAtTail('tailz4', 69);
const b = new LinkedList();
b.addAtHead('byes', 4);
b.addAtTail('tailb', 5);

const c = new LinkedList();
c.addAtHead('cyes', 6);
c.addAtTail('lastz', 12);


console.log(a.head.next);
console.log(a.head.next.next);
console.log(a.head.next.next.next);
console.log(a.head.next.next.next.next);
console.log(a.length);


