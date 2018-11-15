//are the only inputs strings?
//are there only regular characters/alphabets
//are there upper case and lower case?
// case-sensitive?

//it is assumed only upper case and lower case letters

//plan: iterate through the whole string
//have a counter for letter occurences
//create result str
// second pointer or an i + 1
// if str[i] === str[i + 1], then increment counter
// if they do not then add str[i]
//if counter > 1 then add counter and reset counter = 1
// return result str

function stringComp(str) {
  let results ='';
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      results += str[i];

      if (counter > 1) {
        results += counter.toString();
        counter = 1;
      }
    }


  }

  return results;
}


console.log(stringComp('aabcccccaaa'));
console.log(stringComp('aabCcCccaaa'));

