 let array = [];
 const test = new Promise(function (resolve, reject) {
   array.push('123');
   resolve('hello');
 });


 const promises = [test, test, test]

 Promise.all(promises).then(() => {
   console.log(array);
   array.forEach(el => console.log(el));
 });