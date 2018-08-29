
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var store = [];
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    runCommands(input);
    
});

//parse commands and performs commands
function runCommands(strInput) {
    //seperates each command
    
    const strCommands = strInput.split('\n'); // o(n)
    
    // iterate through each command and perform
    strCommands.forEach((cmd) => { //o(n)
        
        //edge case in case there is a lot of white space before add
        let cmdInput = cmd.trim();

        let parseArg;

            
        //maybe turn cmdInput to turn into lowercase to verify for edge cases
        // edge case for input or empty array
        if (cmdInput.slice(0, 3) === 'add') {
  
            parseArg = JSON.parse(cmdInput.slice(4, cmdInput.length));

            add(parseArg);
        } else if (cmdInput.slice(0, 3) === 'get') {
            parseArg = JSON.parse(cmdInput.slice(4, cmdInput.length));

            if (JSON.stringify(parseArg) === JSON.stringify({})) {
              store.forEach(entry =>  console.log(JSON.stringify(entry)));
            } else {
              const results = get(parseArg);
              results.forEach(res => console.log(JSON.stringify(res[0])));
            }


        } else if (cmdInput.slice(0, 6) === 'delete') {
            parseArg = JSON.parse(cmdInput.slice(7, cmdInput.length));
            remove(parseArg);
        }
            
     
    });

}

function add(json) {
    store.push(json);
}

// some type of deep dup comparison will be needed
//iterate through the store, get the keys and see if there are any that match obj2 keys
// function compare(obj1, obj2) {
//   const obj1Keys = Object.keys(obj1);
//   const obj2Keys = Object.keys(obj2);

//   for (let i = 0; i < obj1Keys.length; i++) {

//     if (obj1[obj1Keys[i]] instanceof Array && obj2[obj1Keys[i]]) {
//       let count = 0;

//       //sorting might be an issue if its letter or numbers. may need to do each and filter
//       //using includes so that if an array has a mixture of numbers and strings such as '1' and 1
//       obj2[obj1Keys[i]].forEach((el) => {
//         if (obj1[obj1Keys[i]].includes(el)) {
//           // console.log('hello');
//           count++;
//         }
//       });
//       // console.log(count);
//       if (count !== obj2[obj1Keys[i]].length) {
//         return false;
//       }


//     } else if (obj1[obj1Keys[i]] instanceof Object) {
//       // console.log(obj1[obj1Keys[i]])
//       if (obj2[obj1Keys[i]]) {
//         if (compare(obj1[obj1Keys[i]], obj2[obj1Keys[i]]) === false) {
//           return false;
//         }
//       } else {
//         if (compare(obj1[obj1Keys[i]], obj2) === false) {
//           return false;
//         }
//       }

//     } else if (obj2Keys.includes(obj1Keys[i])) {


//       if (obj1[obj1Keys[i]] !== obj2[obj1Keys[i]]) {

//         return false;
//       }
//     }




//   }
//   return true;
// }

///////////////////////////
// function compare(o1, o2) {

//   if (o1 == o2) {
//     return true;
//   } else if (o1 instanceof Array && o2 instanceof Array) {
//     for (item of o1) {
//       if (item not in o2) {
//         return false;
//       }
//     }
//   } else if (o1 instanceof Object && o2 instanceof Object) {
//     for (key in o1) {
//       if (!compare(o1[key], o2[key])) {
//         return false;
//       }
//     }
//   }

//   return false;
// }

//AAAAAAAAAAAAAAAA



function createCounter(o) {
  let counter = {};

  for (item of o) {
    if (o[item]) {
      o[item] = 0;
    } else {
      o[item]++;
    }
  }
  return counter;
}

function isSubset(a, b) {
  let counterA = createCounter(a);
  let counterB = createCounter(b);
  // console.log(a, b)
  for (key in counterA) {
    var vala = counterA[key];
    var valb = counterB[key];
    if (valb && vala <= valb) {
      return true
    }

    return false;
  }

}

function compare(o1, o2) {
  // console.log(o1, o2)
  if (o1 == o2) {
    return true;
  } else if (o1 instanceof Array && o2 instanceof Array) {
    return isSubset(o1, o2);
  } else if (o1 instanceof Object && o2 instanceof Object) {
    for (key in o1) {
      // console.log(key)
      if (!compare(o1[key], o2[key])) {
        return false;
      }
    }
    return true
  }
  return false;
}


function get(obj) {


  let results = [];

  store.forEach((entry, idx) => {
    if (compare(obj, entry)) {
      results.push([entry, idx]);
    }
  });

  return results;

}

function remove(obj) {
    
    let results = [];
    
    store.forEach((entry, idx) => {
        if (compare(obj, entry)) {
            results.push([entry, idx]);
        }
    });

  let deleteIdxes = [];
  results.forEach(el => deleteIdxes.push(el[1]));


  store = store.filter((el, idx) => !deleteIdxes.includes(idx));

}

// add {"type": "list", "list": [2, 3, 4, 5]}
// add { "type": "list", "list": [3, 4, 5, 6]}
// add { "type": "list", "list": [4, 5, 6, 7]}
// add { "type": "list", "list": [5, 6, 7, 8]}
// add {"type": "list", "list": [6, 7, 8, 9]}
runCommands(
  `add {"type": "list", "list": [1, 2, 3, 4]}
  get {"type": "list", "list": [1]}
  get {"type": "list","list": [3, 4]}`);

// runCommands(
//   `add {"id": 1,"last": "Doe","first": "John","location": {"city": "Oakland","state": "CA","postalCode": "94607"},"active": true}
//   add {"id": 4,"last": "Frost","first": "Jack","location": {"city": "Seattle","state": "WA","postalCode": "98204"},"active": false}
//   add {"id": 2,"last": "Doe","first": "Jane","location": {"city": "San Francisco","state": "CA","postalCode": "94105"},"active": true}
//   add {"id": 3,"last": "Black","first": "Jim","location": {"city": "Spokane","state": "WA","postalCode": "99207"},"active": true}
//   get {"location": {"state": "WA"},"active": true}
//   get {"id": 1}
//   delete {"active": true}
//   get {}`

// );
// get {"active": true}
// get {"id": 1}

//     // may need to iterate store in here then use compare function 
//     for (let i = 0; i < store.length; i++) {
//         // probably compare(store[i], obj)
//         // let storeKeys = Object.keys(store[i])
//         // if (Object.keys(store[i]))
//     }
//     let terms = Object.keys(keyVals);
//     let vals = Object.values(keyVals);
    
    
    
//     get(store.slice(1, store.length), keyVals)
    



//add function, get function using stdout, delete function