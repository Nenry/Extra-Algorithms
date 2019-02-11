var array= [];

const test2 = new Promise(function(resolve, reject) {
  resolve('hello');
});

// test2.then(res => console.log(res));

let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
  let isClean = false;

  if (isClean) {
    resolve('clean');
  } else {
    reject('not clean');
  }
});

promiseToCleanTheRoom.then(resp => {
  console.log('The room is ' + resp);
}).catch(err => console.log(err));


let cleanRoom = function() {
  return new Promise((resolve, reject) => {
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message) {
  return new Promise((resolve, reject) => {
    resolve(message + ' remove Garbage');

  });
};

let winIceCream = function(message) {
  return new Promise((resolve, reject) => {
    resolve(message + ' won Ice Cream');
  });
};

// cleanRoom().then((resp) => removeGarbage(resp)).then((resp) => winIceCream(resp)).then((resp) => console.log('finished ' + resp));
Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(() => {
  console.log('all finished');
});

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