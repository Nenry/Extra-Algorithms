function sherlockAndAnagrams(s) {
  let anagrams = {};
  let splitted = s.split("");
  let pairs = 0;
  splitted.forEach((letter, idx) => {
    for (let j = idx; j < splitted.length; j++) {
      let sorted = splitted.slice(idx, j + 1).sort().join("");
      console.log(sorted);
      if (anagrams[sorted] === undefined) {
        console.log('this');
        anagrams[sorted] = 1;
      } else if (anagrams[sorted]) {
        console.log('that');
        anagrams[sorted] += 1;
        pairs += 1;
        console.log(pairs);
      }
    }
    // anagrams = {};
  });

  // let counts = Object.values(anagrams);
  // let totalCount = 0;
  // console.log(anagrams);

  // counts.forEach((el) => {
  //   console.log(el);
  //   totalCount += el;});
  // return Math.floor(totalCount/2);
  return pairs;
}


// console.log(sherlockAndAnagrams('cdcd')); // should equal 5
console.log(sherlockAndAnagrams('kkkk'));


//iterate through which each length, reset after last has been reached

// https: //www.hackerrank.com/rest/contests/master/challenges/sherlock-and-anagrams/hackers/ChesterDrawers/download_solution