function leader(array) {
  //scan from right to left, the max will be the leaders
  const leaders = [];
  let max;
  for (let i = array.length - 1; i >= 0; i--) {
    if (max === undefined || array[i] > max) {
      max = array[i];
      leaders.unshift(array[i]);
    }
  }
  
  return leaders;

}

console.log(leader([16, 17, 4, 3, 5, 2]));