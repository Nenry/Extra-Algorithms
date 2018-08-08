function qs(array, startIdx=0, length=array.length) {
  if (length <= 1) {
    return array;
  }

  let pivot = array[startIdx];
  let barrierIdx = startIdx;

  for (let i = startIdx + 1; i <= length + startIdx; i++) {
    if (pivot > array[i]) {
      barrierIdx++;
      let swap1 = array[barrierIdx];
      array[barrierIdx] = array[i];
      array[i] = swap1;
    }
  }

  array[startIdx] = array[barrierIdx];
  array[barrierIdx] = pivot;
  

  let left = barrierIdx - startIdx;
  let right = length - (left + 1);
  qs(array, startIdx, left); //left
  qs(array, barrierIdx + 1, right); //right

  return array;

}

console.log(qs([5, 4, 3, 2, 1]));

// function activityNotifications(expenditure, d) {
//  let notifications = 0;
//  let start_idx = d + 1;
//  let trails = expenditure.slice(0, d);

//   if (d >= expenditure.length); {
//     return notifications;
//   }





// }