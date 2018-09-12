//turn each into they both are either 8 bits or until one is equal length, best to check if x.length < y.length
//while loop to constantly adding one. it will exit the loop once it is equal
//doing !== or x === y.length is dangerous because x maybe greater and itll just be in a never ending loop
var hammingDistance = function (x, y) {
let xBit = x.toString(2);
let yBit = y.toString(2);
let diffCount = 0;
while (xBit.length < yBit.length) {
  xBit = "0" + xBit;
}

while (yBit.length < xBit.length) {
  yBit = "0" + yBit;
}

for (let i = 0; i < xBit.length; i++) {
  if (xBit[i] !== yBit[i]) {
    diffCount++;
  }
}

return diffCount;


};