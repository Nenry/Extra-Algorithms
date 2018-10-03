Array.prototype.quickSort = function () {
  //quicksort is 

  if (this.length <= 1 ) {
    return this;
  }

  const pivot = this[0];

  const left = this.slice(1).filter(el => el <= pivot);
  const right = this.slice(1).filter(el => el > pivot);

  return left.quickSort().concat(pivot).concat(right.quickSort());

};

console.log([2,4,5,1,6,7].quickSort());
console.log([2,3,4,7,9,3].quickSort());


