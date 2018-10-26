// Write a method that takes a string as input. It should return 
// true if the input is a valid IPv4 address 
// (ie. anything between 0.0.0.0 and 255.255.255.255 is valid).

function validIp(str) {
  const subIp = str.split('.').map(el => parseInt(el));

  if (subIp.length !== 4) {
    return false;
  } else {
    for (let num of subIp) {
      if (num > 255 || num < 0 || isNaN(num)) {
        return false;
      }
    }  
  }

  return true;

}

console.log(validIp('225.255.255.255'), true);
console.log(validIp('225.255.255.256'), false);
console.log(validIp('225.294.251.251'), false);
console.log(validIp('225.294.251'), false);
console.log(validIp('0.0.0.0'), true);
console.log(validIp('0.0.0.hi'), false);