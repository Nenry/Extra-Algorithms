// Anagrams
// Find mininmal amount of deletions until they are complete anagrams of each other
// they are just purely lowercase lettrs
//punctuations or anything special?
//edge cases?
//duplicates?

//psuedo solutions 
//1. Hash/set one string of all its letter// improvement hash both. 2N // while hashing can keep count of letter length
//2. Check each letter of the longest string 
//3. forEach(letter) (deleteCount += Math.abs(hash1[letter] - hash2[letter])
//4. return count 

//second solution
//go through one string, delete from each string each time. until end of iteration
//whatever is remaining is how many deletions will be needed
//only necessary anagrams will be deleted, remaining are unecessary
//shortest length 


// function makeAnagram(a, b) {
  


//   let aString = a.slice(0);
//   let bString = b.slice(0);

//   aString.split("").forEach((letter) => {
    
//   });

// }

function makeAnagram(a, b) {
  let strOneHash = {};
  let strTwoHash = {};
  let resultCount = 0;
  //O(n)
  a.split("").forEach((letter) => {
    
    if (strOneHash[letter]) {
      strOneHash[letter] += 1;
    } else {
      strOneHash[letter] = 0;
    }
  });
  // O(n)
  b.split("").forEach((letter) => {
    
    if (strTwoHash[letter]) {
      strTwoHash[letter] += 1;
    } else {
      strTwoHash[letter] = 0;
    }
  });

  let shortest;
  let longest;
  if (a.length > b.length) {
    shortest = strTwoHash;
    longest = strOneHash;
  } else {
    shortest = strOneHash;
    longest = strTwoHash;
  }

  Object.keys(shortest).forEach((letter) => {
    if (longest[letter]) {
      shortest[letter] -= 1;
      longest[letter] -= 1;
    }
  });

  Object.values(longest).forEach((count) => {
    resultCount += count;
  });

  Object.values(shortest).forEach((count) => {
    resultCount += count;
  });

  return resultCount;

}

console.log(makeAnagram("cde", 'abc'));