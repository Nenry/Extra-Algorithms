//what are the ip address constrains? 4 sections? 
//How should the results be returned?
//safe to assume str will only include numbers and no spaces?
//typical input: 195.158.6.1
//constraints on ip range?
//numbers are in base of 10?
//if there are white spaces you can use trim() to remove white space from both sides of a string 
//regex? (do this after)
function ipBinary(str) {
  
    let numArr = str.split(".").map(el => parseInt(el, 10));
    let results = "";

    if (numArr.length === 4) {

      for (let num of numArr) {
        if (validIp(num)) {
          results += " " + num.toString(2);
        } else {
          throw 'Invalid IP! Numbers must be between 0 and 255';
        }
      }
    }
    results = " " + results;
    while (results.length < 32) {
      results = '0' + results;
    }

    return results;

}

//0 to 255
function validIp(num) {
  if (num > 255 || num < 0 || !Number.isInteger(num)) {
    return false;
  } else {
    return true;
  }
}
//if you wanted to create your own binary
//turn number into binary
//starting from highest power of 32 down to 0
//make condition if > certain value then use that power
//can also use parseInt(number, base)
//

console.log(ipBinary('192.168.5.2'));
console.log(ipBinary('102.168.5.2'));

console.log(ipBinary('192.168.5.-1'));
// console.log(validIp(2));
// console.log(validIp(-1));
// console.log(validIp(1.2));



