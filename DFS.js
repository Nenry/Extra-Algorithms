class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    //time complexity is O(V + E) => vertices + edges, Space complexity is O(V) since the array is being created and itll just be each vertice
    array.push(this.name);
    for (let child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;

  }
}
