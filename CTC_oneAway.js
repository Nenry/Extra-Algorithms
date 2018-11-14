
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

function oneAway(str1, str2) {

  if (str1.length === str2.length) {
    if (str1 === str2) {
      return true;
    } else {
      return oneReplace(str1, str2);
    }
  } else if (str1.length - 1 === str2.length) {
    return oneEdit(str2, str1);
  } else if (str1.length === str2.length - 1) {
    return oneEdit(str1, str2);
  }

  return false;

}

console.log(oneAway('pale', 'ple'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pale', 'bake'));
console.log(oneAway('pale', 'pale'));
