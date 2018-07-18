/**
 * Initialize your data structure here.
 */
var Node = function(val) {
  this.next = null;
  this.prev = null;
  this.val = val;
 
};

var MyLinkedList = function() {
    this.length = 0;
    this.head = null;

};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.length += 1;
    } else {
      this.head.prev = node;

      node.next = this.head;

      
      this.head = node;

      this.length += 1;
    }
    // console.log(this.head.next.val); why doesnt this work but works in the else statement 
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val);
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = node;
    node.prev = currNode;
    this.length += 1;
    // console.log(val);
    
    
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.length) return null;
    
    // console.log(val);
    if (index === this.length) {
      // console.log(this.addAtTail(val));
      this.addAtTail(val);
      return;
    }

    
    let currNode = this.head;
    let node = new Node(val);
    for (let i = 0; i < index; ++i) {
      currNode = currNode.next;
    }
    
    // console.log(currNode.prev.val);
    node.next = currNode;
    node.prev = currNode.prev;
    currNode.prev.next = node;
    // console.log(currNode.prev.val);
    this.length++;

};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index > this.length - 1) return null;
    if (index < 0) return null;

    if (index === 0) { 
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return;
    }

    let currNode = this.head;

        for (let i = 0; i < index; ++i) {
          currNode = currNode.next;
        }
      // console.log(currNode.prev.val);
      // console.log(currNode.prev.val);
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        this.length--;



};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
 var obj =  new MyLinkedList();
 obj.addAtHead(1);
 obj.addAtHead(2);
obj.addAtTail(5);
// console.log(obj.length);
obj.addAtIndex(3, 305);
obj.addAtIndex(2, 69);
console.log(obj.head.next.val);
obj.deleteAtIndex(1);
console.log(obj.head.next.val);
// console.log(obj.head.next.next.next.next.val);