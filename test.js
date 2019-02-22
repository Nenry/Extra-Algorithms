// // function add(x, y) {
// //   return function (z) {
// //     if (typeof z !== 'undefined') {
// //       x = x + y + z;
// //       return arguments.callee;
// //     } else {
// //       return x;
// //     }
// //   };
// // }

// // console.log(add(1, 2)(2)(3)());

// function add(arg1, arg2) {
//   return function addOthers(arg3) {
//     if (arg3 !== undefined) {
//       return arg1 + arg2 + arg3;
//     } else {
//       return arg1 + arg2;
//     }
//   };
// }

// console.log(add(1, 2)(9));


var length = 10;

function fn() {
  console.log(this.length);
}

// var obj = {
//   length: 5,
//   method: function (func) {
//     func();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);

