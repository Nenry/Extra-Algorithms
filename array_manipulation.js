function arrayManipulation(n, queries) {

  let status_arr = [];

  for (let i = 1; i <= n; i++) {
    status_arr.push(0);
  }


  queries.forEach((query) => {
    for (let j = query[0]; j <= query[1]; j++) {
      status_arr[j - 1] += query[2];
    }
  });
  return Math.max(...status_arr);

}