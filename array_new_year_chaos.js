function minimumBribes(q) {
  let correctQue = [];
  for (let i = 1; i <= q; i++) {
    correctQue.push(i);
  }

  let count = 0;
  correctQue.forEach((el, idx) => {
    if ( correctQue[idx] === q[idx] ) {
      count += 1;
    }
  });

  if (count === q.length) {
    return 0;
  }

}



console.log(minimumBribes([2, 1, 5, 3, 4]));
console.log(minimumBribes([2, 5, 1, 3, 4]));