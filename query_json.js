process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  // now we can read/parse input
});




// Example
process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
  __input_stdin += data;
});

process.stdin.on('end', function () {
  __input_stdin_array = __input_stdin.split("\n");
  var res;
  var n = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
  __input_currentline += 1;
  for (var i = 0; i < n; i++) {
    var _line = __input_stdin_array[__input_currentline].trim();
    __input_currentline += 1;
    var line = _line.split(" ");
    var _a = parseInt(line[0]);
    var _b = parseInt(line[1]);
    res = _a + _b;
    process.stdout.write("" + res + "\n");
  }
});


//last saved

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  var store = [];
  runCommands(input)
  // const commands = runCommands(input); this is for testing

});

//parse commands and performs commands
function runCommands(strInput) {
  //seperates each command
  const strCommands = strInput.split('\n')

  iterate through each command and perform
  strCommands.forEach((cmd) => {

    //edge case in case there is a lot of white space before add
    let cmdInput = cmd.trim();
    let parseArg;


    //maybe turn cmdInput to turn into lowercase to verify for edge cases
    if (cmdInput.slice(0, 4) === 'add') {
      // just put JSON.parse into argument
      // might need to trim again for edge case after if JSON.parse does not parse and trim correctly
      parseArg = JSON.parse(cmdInput.slice(4, cmdInput.length))
      add(parseArg)
    } else if (cmdInput.slice(0, 4) === 'get') {
      parseArg = JSON.parse(cmdInput.slice(4, cmdInput.length))
      get(store, parseArg)
    } else if (cmdInput.slice(0, 7) === 'delete') {
      parseArg = JSON.parse(cmdInput.slice(7, cmdInput.length))
      delete(parseArg)
    }


  })
  //need to remove the line below, it is just for testing
  // return strCommands;
}

function add(json) {
  store.push(json)
}

//some type of deep dup comparison will be needed
function get(store, keyVals) {
  let terms = Object.keys(keyVals);
  let vals = Object.values(keyVals);



  get(store.slice(1, store.length), keyVals)
  //
}


//add function, get function using stdout, delete function