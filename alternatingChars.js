function alternatingCharacters(s) {

  let deletions = 0;
  console.log(s)
  let str = s.length;
  // console.log(str)


  for (let i = 0; i < str - 1; i++) {
    // console.log("hello")
    if (s[i] === s[i + 1]) {
      deletions++;
    }
  }
  return deletions;

}