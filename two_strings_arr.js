function twoStrings(s1, s2) {
  let subBank = {};
  let shortest;
  let longest;
  if (s1.length > s2.length) {
    shortest = s2;
    longest = s1;
  } else {
    shortest = s1;
    longest = s2;
  }

  shortest = shortest.split("");
  shortest.forEach((el) => {
    subBank[el] = true;
  });

  for (let i = 0; i < longest.length; i++) {
    if (subBank[longest[i]]) {
      return 'YES';
    }
  }

  return 'NO';


}