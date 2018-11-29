//Given a root node, rearrange the link list so that the nodes in 
// node0-node1-node2-node3-node-4 => node0 - node2 - node4 - node1 - node3

function Node(val) {
  this.val = val;
  this.next = undefined;
}

function linkListEvenOdd(rootNode) {
  const evens = [];
  const odds = [];

  let node = rootNode;

  while (node) {
    evens.push(node);
    if (node.next) {
      odds.push(node.next);
    }

    if (node.next.next) {
      node = node.next.next;
    }

  }

  let resultNode = evens.shift();
  while (evens.length > 0) {
    resultNode.next = evens.shift();
  }

  resultNode.next = odds.shift();
  resultNode = resultNode.next;

  while (odds.length > 0) {
    resultNode.next = odds.shift(); 
    resultNode = resultNode.next;
  }

  return rootNode;

}

let a = new Node(0);
let b = new Node(1);
let c = new Node(2);
let d = new Node(3);
let e = new Node(4);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(a.next);
console.log(b.val);