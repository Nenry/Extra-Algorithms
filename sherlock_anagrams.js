function sherlockAndAnagrams(s) {
  let anagrams = {};
  let splitted = s.split("");
  splitted.forEach((letter, idx) => {
    for (let j = idx; j < splitted.length; j++) {
      let sorted = splitted.slice(idx, j + 1).sort().join("");
      if (anagrams[sorted] === undefined) {
        anagrams[sorted] = 1;
      } else if (anagrams[sorted]) {
        anagrams[sorted] += 1
      }
    }
  });

  let counts = Object.values(anagrams);
  let totalCount = 0;
  console.log(anagrams);
  counts.forEach((el) => {totalCount += Math.floor(el / 2);});
  return totalCount;
}


console.log(sherlockAndAnagrams('kkkk'));

