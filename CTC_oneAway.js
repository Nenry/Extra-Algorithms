
// One Away: There are three types of edits that can be performed on strings: insert a character,
//   remove a character, or replace a character.Given two strings, write a function to check
// if they are one edit(or zero edits) away.
// EXAMPLE
// pale, ple - > true
// pales, pale - > true
// pale, bale - > true
// pale, bake - > false

//Plan:
// can make a check to see if lengths only differ by one or equal
// can make a counter for each word with its respective char 
//counter isnt going work because it may not be in the same respective order
// then iterate through one of them, make a difference counter, if difference > 1 then return false because
// it is no longer one or zero edit ways

//check differences in length,
//if same length then create a function that checks for a replaced letter
//replaced letter can check for every index should be the same letter, 
//eventually there will be two instances where it will not be the same letter if youre checking via index

//if lengths are difference, you can create another function where it compares the two str
//have two pointers, continously check, if they both equal then increment both pointers
//if they dont equal then increment the longer length
// if another occurence/instance happens then return false because its not one away anymore

function oneReplace(str1, str2) {
  let replaced = false;

  for(let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (replaced) {
        return false;
      }
      replaced = true;
    }
  }

  return replaced;
}

function oneEdit(shortStr, longStr) {

  //O(n) for time complexity since we will iterate through once
  let shorti = 0;
  let longi = 0;
  let edit = false;
  while (shorti < shortStr.length || longi < longStr.length) {
    if (shortStr[shorti] !== longStr[longi]) {
      if (edit) {
        return false;
      }
      longi++;
      edit = true;
    } else {
      longi++;
      shorti++;
    }

  }
  return edit;
}

function improvedOneEdit(str1, str2) {
  let long;
  let i = 0;
  let short;
  let j = 0;
  let edited = false;
    // O(n) for checking length
  if (str1.length > str2.length) {
    long = str1;
    short = str2;
  } else {
    short = str1;
    long = str2;
  }


  //still O(n) because will go through each index once
  while (i < long.length || j < short.length) {
    if (long[i] !== short[j]) {
      if (edited) {
        return false;
      }

      edited = true;
      i++;
    } else {
      i++;
      j++;
    }

  }

  return edited;

}

// function oldoneAway(str1, str2) {
//     //if one letter is replaced
//   if (str1.length === str2.length) {
//     if (str1 === str2) {
//       return true;
//     } else {
//       return oneReplace(str1, str2);
//     }
//   } else if (str1.length - 1 === str2.length) {
//     return oneEdit(str2, str1);
//   } else if (str1.length === str2.length - 1) {
//     return oneEdit(str1, str2);
//   }

//   return false;

// }

function oneAway(str1, str2) {
    //if one letter is replaced
  if (str1.length === str2.length) {
    if (str1 === str2) {
      return true;
    } else {
      return oneReplace(str1, str2);
    }
  } else if (Math.abs(str1.length - str2.length)) {
    return improvedOneEdit(str2, str1);
  } 

  return false;

}

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('pale', 'bale')); //true 
console.log(oneAway('pale', 'bake')); //false p is 1 difference, k is another difference
console.log(oneAway('pale', 'pale')); // true
