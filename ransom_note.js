function checkMagazine(magazine, note) {
  let wordBank = {};
  magazine.forEach((word) => {
    if (wordBank[word] === undefined) {
      wordBank[word] = 1;
    } else {
      wordBank[word] += 1;
    }
  });

  for (let i = 0; i < note.length; i++) {

    if (wordBank[note[i]] > 0) {
      wordBank[note[i]] -= 1;
    } else {
      return console.log("No");
    }
  }

  return console.log("Yes");

}

console.log(checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four']));