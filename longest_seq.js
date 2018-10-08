function longestSeq(arr) {
  const counts = {};
  
  for(let i = arr.length - 1; i >= 0; i--) {
    //add into hash
    //find the next biggest one and +1 into it
    const numsArr = Object.keys(counts).sort();
    const nextNum = nextBiggest(arr[i], numsArr);

    if (nextNum) {

      counts[arr[i]] = counts[nextNum] + 1;
    } else {
      counts[arr[i]] = 1;
    }
    
  }
  

  const finalCounts = Object.values(counts);
  return Math.max(...finalCounts);


}

function nextBiggest(num, sortedArr) {

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] > num) {
      // console.log(sortedArr[i], num);
      return sortedArr[i];
    }
  }
}



function LIS(arr) {
  //returns array of subsequences

  if (arr.length) {
    var num = arr.shift();
    var arrSubseq = LIS(arr);

    var newArraySubset = arrSubseq;
    newArraySubset.push([num]);

    for (var subseq of arrSubseq) {
      if (subseq[0] && num < subseq[0]) {
        var newlist = subseq.slice(0);
        newlist.unshift(num);
        newArraySubset.push(newlist);
      }
    }

    return newArraySubset;


  } else {
    return [];
  }
}









console.log(longestSeq([6, 1, 3, 9, 4, 5, 9, 5, 6, 7, 8])); // output of longest should be 1, 3, 4, 5, 6, 7, 8
// console.log(LIS([6, 1, 3, 9, 4, 5, 5, 5, 6, 7, 8])); // output of longest should be 1, 3, 4, 5, 6, 7, 8
// console.log(longestSeq([3, 10, 2, 1, 20])); // output of longest should be 1, 3, 4, 5, 6, 7, 8
// console.log(longestSeq([50, 3, 7, 10, 7, 40, 80])); // output of longest should be 1, 3, 4, 5, 6, 7, 8
// console.log(longestSeq([6, 1, 3, 2, 5, 9])); // output of longest should be 1, 3, 4, 5, 6, 7, 8

