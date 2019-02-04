function solution(number) {

  const multiples = getMultiples(number, 3).concat(getMultiples(number, 5));
  const uniqueMultiples = {};

  multiples.forEach(factor => {
    uniqueMultiples[factor] = true;
  });

  if (multiples.length === 0) {
    return 0;
  } else {
    let sum = Object.keys(uniqueMultiples).map((str) => parseInt(str));
    console.log(sum);
    sum = sum.reduce((total, num) => total + num);
    return sum;
  }

}

// function getMultiples(num, factor) {
//   const results = [];
//   let newNum = num;
//   let newFactor = factor;
//   while (newFactor <= newNum) {
//     newNum -= newFactor;
//     if (newNum > 0) {
//       results.push(newFactor);
//       newFactor += factor;
//     }
//   }

//   return results;
// }





function getMultiples(num, factor) {
  const results = [];
  let newFactor = factor;
  
  while (newFactor < num) {
    results.push(newFactor);
    newFactor += factor;
    
  }
  return results;
  
}

// console.log(getMultiples(10, 3));
// console.log(getMultiples(290, 5));
// console.log(getMultiples(290, 3));
// console.log(solution(200));


function markdownParser(markdown) {
  let hashtagCounter = 0;
  let trimmedMarkdown = markdown.trim();
  let n = 0;

  while (trimmedMarkdown[n] === '#') {
    hashtagCounter++;
    n++;
  }

  if (hashtagCounter > 6) {
    return markdown;
  } else if (trimmedMarkdown[n] === ' ') {
    let newMarkdown = trimmedMarkdown.slice(n + 1, markdown.length).trim();
    return `<h${hashtagCounter}>${newMarkdown}</h${hashtagCounter}>`;
  } else {
    return markdown;
  }


}


// console.log(markdownParser('### Header'));
// console.log(markdownParser('### ### Double Triple Header'));
// console.log(markdownParser('Behind # The Scenes'));


// ######
// Double Triple Header####### Snow White and the Seven Hashtags#### Space Jam



function specifictyCount(css) {

  let start = 0;
  let end = 1;
  let totalCount = 0;
  let classCount = 0;

  if (css.includes('*')) {
    return [0, 0];
  }
  while (end <= css.length) {
    console.log(css.slice(start, end));
    if (css[end] === '.' || css[end] === '#' || css[end] === ' ' || !css[end]) {
      if (css[end] === '.' || css[end] === '#') {
        console.log(end);
        totalCount++;
      }
      if (css.slice(start, end).includes('.')) {
        totalCount += 10;
        classCount++;
      } else if (css.slice(start, end).includes('#')) {
        totalCount += 10000;
      } else {
        totalCount += 1;
      }
      
      start = end;
    }
    end++;
  }

  return [totalCount, classCount];
}

function compare(a, b) {
  const aCount = specifictyCount(a);
  // console.log(aCount);
  const bCount = specifictyCount(b);
  // console.log(bCount);
  // console.log('a', a);/
  // console.log('b', b);
  console.log(aCount[0]);
  console.log(bCount[0]);
  // console.log(aCount[0]> bCount[0]);
  if (aCount[0] === bCount[0]) {
    
    return (aCount[1] > bCount[1] ? a : b);
  } else if (aCount[0] > bCount[0]) {
    
    console.log(aCount);
    console.log(bCount);
    return a;
  } else {
    // console.log('error');
    return b;
  }



}

// console.log(compare('#header #menu', '#menu'));
console.log(compare('.foo.bar', '.x .y'));
// console.log(specifictyCount('.foo.bar', '.x .y'));
// console.log(specifictyCount("body p"));
// console.log(specifictyCount("#id"));
// console.log(specifictyCount("div.big"));