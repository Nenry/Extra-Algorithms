// Given a string, find the length of the longest substring without repeating characters
// Input: "abcabcbb"
// Output: 3 because of "abc"

// Input: "bbbbbb"
// Output: 1 because "b"

// Input: "pwwkew"
// Output: 3 because of "wke"


function longestUniqueSubstr(str) {
  let i = 0;
  let j = 0;
  let maxLength = 0;
  const memory = {};

  while (i < str.length && j < str.length) {

    if (!memory[str[j]]) {
      memory[str[j]] = true;
      j++;
      maxLength = Math.max(maxLength, j - i);
    } else {
      delete memory[str[i]];
      i++;
    }
  }

  return maxLength;

}

console.log(longestUniqueSubstr('abcabcbb')); // should equal 3
console.log(longestUniqueSubstr('bbb')); // should equal 1;
console.log(longestUniqueSubstr('pwwkew')); // should equal 3;