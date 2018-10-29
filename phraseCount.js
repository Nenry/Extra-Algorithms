//given a substr or phrase. count how many times it appears in that str
//example phraseCount('a a', 'a a a a a') => should return 4
//time complexity is O(n) + O(m)
//space complexity is O(n) or substr, space complexity can be changed to be constant if we just mutate the str

function phraseCount(subStr, str) {
  let count = 0;
  let currentStr = str;
  //O(n) in terms of space?
  
  if (str.length === 0) {
    return 0;
  }

  //O(n)
  while (currentStr.length > 0) {
    //indexOf, worst case can be O(m)
    let startIdx = currentStr.indexOf(subStr);
    
    
    if (startIdx !== -1) {
      count++;
      // + O(m)
      currentStr = currentStr.substr(startIdx + 1);
      //using substr to drop characters can be O(m)
    } else if (startIdx === -1) {
      return count;
    }
    
  }

  //overall O(n * m), n times m, times because its nested inside 

}


// function phraseCount(subStr, str) {
//   let count = 0;
  
//   if (str.length === 0) {
//     return 0;
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (subStr = )
//   }

// }

// console.log(phraseCount('a a', 'a a a a a'));
// console.log(phraseCount('a a', ''));
// console.log(phraseCount('a b', 'a a a a a'));

function countSubstring(str, subStr) {
  var matches = str.match(new RegExp(subStr, "g"));
  return matches ? matches.length : 0;
}


console.log(countSubstring('a a a a a', 'a a'));