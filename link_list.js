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


  addTailNode(node) {
    this.tail.next = node;
    this.tail = node;
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

a.addTailNode(c.head);
b.addTailNode(c.head);
// console.log(a.head.next);
// console.log(a.head.next.next);
// console.log(a.head.next.next.next);
// console.log(a.head.next.next.next.next);
// console.log(a.length);

function mergePoint(linkedlist1, linkedlist2) {
  //find the difference in length.
  //make the longer length start at the difference then compare node values. if they equal then that is the merge point 
  //if difference is positive then linkedlist1 needs to be iterated to start points
  //if difference is negative then linkedlist2 needs to be iterated to start point
  // if difference is 0 then start point is not needed
  let difference = linkedlist1.length - linkedlist2.length;
  let start1 = linkedlist1.head;
  
  let start2 = linkedlist2.head;

  if (difference > 0) {
    while (difference > 0) {
      start1 = start1.next;
      difference--;
    }
  } else if (difference < 0) {
    start2 = start2.next;
    difference++;
  }

  while (start1 || start2) {
    if (start1.value === start2.value) {
      return start1;
    } else {
      start1 = start1.next;
      start2 = start2.next;
    }
  }


  console.log('No merge point');

}

const mergeNode = mergePoint(a, b);
console.log(mergeNode);


