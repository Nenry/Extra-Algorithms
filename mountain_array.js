//
var peakIndexInMountainArray = function (A) {

  let peak = 0;
  let peakIndex;
  if (A.length < 3) {
    return 0;
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] > peak) {
      peak = A[i];
      peakIndex = i;
    }
  }

  return peakIndex;

};