// function triplets(a, b, c) {
//   let results = {};
//   let build = [];
//   a = a.sort((e, f) => e - f);
//   b = b.sort((e, f) => e - f);
//   c = c.sort((e, f) => e - f);

//   a.forEach((num1) => {
//     b.forEach((num2) => {
//       if (num1 <= num2) {
//         build.push([num1, num2]);
//       }
//     }); 
//   });

//   build.forEach((set) => {
//     c.forEach(el => {
//       if (set[1] >= el) {
//         results[set.concat(el)] = true;
//       }
//     });
//   });
//   return Object.keys(results).length;


// }

Array.prototype.unique = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};

function triplets(a, b, c) {
  a = (a.sort((e, f) => (e - f))).unique();
  b = (b.sort((e, f) => (e - f))).unique();
  c = (c.sort((e, f) => (e - f))).unique();

  let ai = 0;
  let bi = 0;
  let ci = 0;
  let count = 0;

  while (bi < b.length) {
    while (ai < a.length && a[ai] <= b[bi]) {
      ai += 1;
    }
    while ( ci < c.length && c[ci] <= b[bi]) {
      ci += 1;
    }

    count += ai * ci;
    bi += 1;
  }
  return count;
}



console.log(triplets([3, 5, 7], [3, 6], [4, 6, 9]));
console.log(triplets([1, 3, 5, 7], [5, 7, 9], [7, 9, 11, 13]));
console.log(triplets([1, 4, 5], [2, 3, 3], [1, 2, 3]));