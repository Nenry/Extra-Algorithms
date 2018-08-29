function createCounter(o) {
  let counter = {};

  for (item of o) {
    if (o[item]) {
      o[item] = 0;
    } else {
      o[item]++;
    }
  }
}

function isSubset(a, b) {
  let counterA = createCounter(a);
  let counterB = createCounter(b);

  for (key in counterA) {
    var vala = counterA[key];
    var valb = counterB[key];
    if (valb && vala < valb) {
      return true
    }

    return false;
  }

}

function compare(o1, o2) {
  if (o1 == o2) {
    return true;
  } else if (o1 instanceof Array && o2 instanceof Array) {
    return isSubset(a, b)
  } else if (o1 instanceof Object && o2 instanceof Object) {
    for (key in o1) {
      if (!compare(o1[key], o2[key])) {
        return false;
      }
      return true
    }
  }
  return false;
}

let b = {
  "type": "list",
  "list": [1, 2, 3, 4]
}
let a = {
  "type": "list",
  "list": [1]
}
console.log(compare(a, b));
