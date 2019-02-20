//[
// [1, 0, 0, 1, 0],  
// [1, 0, 1, 0, 0],
// [0, 0, 1, 0, 1],
// [1, 0, 1, 0, 1],
// [1, 0, 1, 1, 0],
//]

//find the size of the river in the matrix, 1 indicates it is a river
//Output = [1, 2, 2, 2, 5], there is no particular order to be outputted
// Is it okay to assume, itll be consistent height and width sizes for the matrix?
// value will always be 0 or 1?
// time or space complexity?

//plan of attack!
//iterate through each index, nested looop
//DFS/stack method
// exploreNode helper function
//withinin that function, have a stack if it is unvisited river then get new nodes, increase count
// constantly pop off, simulate the stack/dfs method
// newNodes helper function 
//return size

function riverSizes(matrix) {
  const sizes = [];
  const visited = matrix.map(row => row.map(value => false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (visited[i][j]){
        continue;
      }
      traverseNode(i, j, matrix, sizes, visited);
    }
  }
  return sizes;
}


function traverseNode(i, j, matrix, sizes, visited) {
  let currSize = 0;
  const nodesToExplore = [[i, j]];
  // console.log(nodesToExplore);
  while (nodesToExplore.length) {
    // console.log(nodesToExplore);
    const currNode = nodesToExplore.pop();
    i = currNode[0];
    j = currNode[1];

    if (visited[i][j]) {
      continue;
    }
    visited[i][j] = true;
    if (matrix[i][j] === 0) {
      continue;
    }

    currSize++;
    const newNodes = getUnexploredNodes(i, j, matrix, visited);
    // console.log(newNodes);
    for (let newNode of newNodes) {
      nodesToExplore.push(newNode);
    }

  }

  if (currSize > 0 ) {
    sizes.push(currSize);
  }
}


function getUnexploredNodes(i, j, matrix, visited) {

  //left, right, down
  const results = [];
  //up
  if (i > 0 && !visited[i - 1][j]) {
    results.push([i - 1, j]);
  }

  //left 
  if (j > 0 && !visited[i][j - 1]) {
    results.push([i, j - 1]);
  }

  if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
    results.push([i, j + 1]);
  }

  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    results.push([i + 1, j]);
  }

  return results;

}


console.log(riverSizes([
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
]));