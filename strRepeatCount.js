// You have two strings. Given two strings, string1 and string2. 
// How many copies of str1 are necessary to create str2?
// Copies can be fragments or partials of str1. Order of letters be maintained
// Example 1: Erbyu, rubyrubyruby -> 6, 'ru', 'by'. It requires 2 of these fragments x3 === 6
// Example 2: Winod, windowwindow -> 6, 'wind', 'o', 'w'. It requires 3 of these fragments x2 === 6
// Things to consider below
// What happens when str1 has repeated letters
//

// Efficient Plan of attack
// Iterate through
// Create a hash index map of each str1 and str2
// Some type of conditionals to check letters maintain order 

// Brute force plan of attack?

// *** Overall Time Complexity: O(n + m*q) ***, 
// where n is str1.length
// m is str2.length, q is the length of repeated characters (different indices) in str1

// *** Overall Space Complexity: O(n + q + m) *** 
// where n str1.length, q is repeated letters with different indices for the hash
// where m is the length of str2. Worst case, everything is in order and fragment will be made equivalent to str2.length

function strRepeatCount(str1, str2) {
  const str1Hash = {};
  let fragment = "";
  let lastIndex = -Infinity;
  let count = 0;

  //O(str1.length)

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (str1Hash[letter]) {
      str1Hash[letter].push(i);
    } else {
      str1Hash[letter] = [i];
    }

  }

  //O(str2.length) * O(indices.length)

  for (let j = 0; j < str2.length; j++) {
    let letter = str2[j];
    
    if (str1Hash[letter]) {
      if (fragment.length === 0) {
        fragment = letter;
        lastIndex = str1Hash[letter][0];
        count++;
      } else {
        let letterIndices = str1Hash[letter];
        let foundIdx = false;

        for (let idx of letterIndices) {
          if (idx > lastIndex) {
            fragment += letter;
            lastIndex = idx;
            foundIdx = true;
          }
        }

        console.log(fragment, count);
        if (!foundIdx) {
          count++;
          fragment = letter;
          lastIndex = str1Hash[letter][0];
        } else if (foundIdx === str2.length - 1) {
          count ++;
        }
        
      }
    } else {
      return -1;
    }


  }

  return count;


}

// console.log(strRepeatCount('erbyu', 'rubyrubyruby'));
console.log(strRepeatCount('erbyrun', 'runrunrun')); // should equal 3
console.log(strRepeatCount('winod', 'windowwindow'));

