
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var store = [];
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    runCommands(input);
   // const commands = runCommands(input); this is for testing
    
});

//parse commands and performs commands
function runCommands(strInput) {
    //seperates each command
    const strCommands = strInput.split('\n')
    
    // iterate through each command and perform
    strCommands.forEach((cmd) => {
        
        //edge case in case there is a lot of white space before add
        let cmdInput = cmd.trim();

        let parseArg;

            
        //maybe turn cmdInput to turn into lowercase to verify for edge cases
        // edge case for input or empty array
        if (cmdInput.slice(0, 3) === 'add') {
            // just put JSON.parse into argument
            // might need to trim again for edge case after if JSON.parse does not parse and trim correctly
            // console.log(typeof cmdInput.slice(5, cmdInput.length - 1));
            parseArg = JSON.parse(cmdInput.slice(4, cmdInput.length));
            // parseArg = cmdInput.slice(5, cmdInput.length - 1);
            add(parseArg);
        } else if (cmdInput.slice(0, 3) === 'get') {
            parseArg = JSON.parse(cmdInput.slice(4, cmdInput.length));
            get(parseArg)
        } else if (cmdInput.slice(0, 6) === 'delete') {
            parseArg = JSON.parse(cmdInput.slice(7, cmdInput.length))
            // delete(parseArg)
        }
            
     
    })
    // console.log(store);
    //need to remove the line below, it is just for testing
    // return strCommands;
}

function add(json) {
    store.push(json);
}

// some type of deep dup comparison will be needed
//iterate through the store, get the keys and see if there are any that match obj2 keys
function compare(obj1, obj2) {
        const obj1Keys = Object.keys(obj1);
        const obj2Keys = Object.keys(obj2);

        // console.log(obj1Keys);
        
        for (let i = 0; i < obj1Keys.length; i++ ) {
          // console.log(obj1[obj1Keys[i]] instanceof Object);
          if (obj1[obj1Keys[i]] instanceof Array && obj2[obj1Keys[i]]) {
            // console.log(obj1[obj1Keys[i]]);
              if (!obj1[obj1Keys[i]].sort((a, b) => (a - b)).join("").includes(obj2[obj1Keys[i]].sort((a, b) => (a - b)).join(""))) {
                return false;
              }

            } else if (obj1[obj1Keys[i]] instanceof Object) {
                //recursion
                return;
            } else if (obj2Keys.includes(obj1Keys[i])) {
                if (!obj1[obj1Keys[i]] === obj2[obj1Keys[i]]) {
                    return false;
                }
            }
                
            
            
            
        }
    return true;
}


function get(obj) {
    
    let results = [];
    
    store.forEach((entry) => {
        if (compare(entry, obj)) {
            results.push(entry);
        }
    });
    results.forEach(res => console.log(JSON.stringify(res)));
}

runCommands(
  `add {"type": "list", "list": [1, 2, 3, 4]}
  add {"type": "list", "list": [2, 3, 4, 5]}
  add { "type": "list", "list": [3, 4, 5, 6]}
  add { "type": "list", "list": [4, 5, 6, 7]}
  add { "type": "list", "list": [5, 6, 7, 8]}
  add {"type": "list", "list": [6, 7, 8, 9]}
  get {"type": "list", "list": [1]}
  get {"type": "list","list": [3, 4]}`);

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