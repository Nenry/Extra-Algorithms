/**
 * Initialize your data structure here.
 */

var Node = function (val) {
  this.val = val;
  let next = null;
};
var MyLinkedList = function () {
  this.length = 0;
  this.head = null;
  this.tail = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.length) return -1;
  let currNode = this.head;
  for (let i = 0; i < index; ++i) {
    currNode = currNode.next;
  }
  return currNode.val;

};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newHead = new Node(val);
  newHead.next = this.head;
  this.head = newHead;
  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newTail = new Node(val);

  if (!this.head) {
    this.addAtHead(val);
    return;

  }
  let currNode = this.head;
  
  while (currNode.next) {
    currNode = currNode.next;
  }

  currNode.next = newTail;
  this.tail = newTail;
  this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length) return;
  if (index === this.length) {
    this.addAtTail(val);
    return;
  }

  if (index === 0) this.addAtHead(val);
    
    let newNode = new Node(val);
    let currNode = this.head;
  for (let i = 0; i < index - 1; i++) {
    currNode = currNode.next;
  }
  newNode.next = currNode.next;
  currNode.next = newNode;
  this.length++;


};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.length || index < 0) return;
  if (index === 0 ) {
    this.head = this.head.next;
    this.length--;
    return;
  }

  let currNode = this.head;
  for (let i = 0; i < index; ++i) {
    currNode = currNode.next;
  }

  currNode.next = currNode.next.next;
  this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */