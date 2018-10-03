var array= [];

const test2 = new Promise(function(resolve, reject) {
  resolve('hello');
});

test2.then(res => console.log(res));




// function test() {
//   return(

//     new Promise(function (resolve, reject) {
//       array.push('hi');
//       //  console.log(array);
//       resolve('hello');
//     })
//   );
// }
//  const test1 = new Promise(function (resolve, reject) {
//    array.push('hello');
//   //  console.log(array);
//    resolve('hello');
//  });
//  const promises = [test1, test1, test1];
// //  Promise.all(promises).then((values) => {
//    //array will only return ['hello']
//    // if we want to make it return ['hello', 'hello', 'hello'] then a CB is needed such as function test()
//    console.log(array);
//    //values is an array of all of the resolves
//   array = values;
//   console.log(array);
//  });
//  const test2 = new Promise(function (resolve, reject) {
//    array.push('hoe');
//   //  console.log(array);
//    resolve('hello');
//  });

// test().then(() => test()).then(() => test()).then(() => console.log(array));


//  var promise1 = Promise.resolve(3);
//  var promise2 = 42;
//  var promise3 = new Promise(function (resolve, reject) {
//    setTimeout(resolve, 100, 'foo');
//  });

//  Promise.all([promise1, promise2, promise3]).then(function (values) {
//    console.log(values);
//  });