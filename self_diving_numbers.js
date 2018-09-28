//left..right is the range
//self diving numbers can be divided evenly by each digit in the number, the number cannot contain a 0 in it
var selfDividingNumbers = function (left, right) {
  const results = [];
s
  for(let n = left; n <= right; n++) {
    const num = n.toString().split("").map((el) => {
      return parseInt(el);
    });
  }
};

