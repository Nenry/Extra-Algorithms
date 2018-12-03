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
    console.log(node.val);
    evens.push(node);
    if (node.next) {
      odds.push(node.next);
    }
    
    console.log('node before', node.val);
    if (node.next && node.next.next) {
      console.log('hi');
      node = node.next.next;
    } else {
      node = undefined;
    }
    // console.log('node after', node.val);

  }

  // console.log('evens', evens);
  // console.log('odds', odds);
// console.log('hello');

  let resultNode = evens.shift();
  while (evens.length > 0) {
    resultNode.next = evens.shift();
    resultNode = resultNode.next;
  }

  resultNode.next = odds.shift();
  resultNode = resultNode.next;

  // console.log(resultNode);

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
// console.log(a);
// console.log(b.val);

// linkListEvenOdd(a);

// console.log(a);

// console.log(e.next.val);
// console.log(b.next.val);
// console.log(c.next.val);



function optimizedLinkListEvenOdd(rootNode) {
  let rootOddNode = rootNode.next;

  let evenNode = rootNode;
  let oddNode = rootNode.next;

  while (evenNode || oddNode) {

    if (evenNode.next) {
      evenNode.next = evenNode.next.next;
      evenNode = evenNode.next;
    } else {
      evenNode = undefined;
    }

    if (oddNode.next) {
      oddNode.next = oddNode.next.next;
      oddNode = oddNode.next;
    } else {
      oddNode = undefined;
    }

  }


}

console.log(a);

optimizedLinkListEvenOdd(a);

console.log(e.next.val);
console.log(b.next.val);