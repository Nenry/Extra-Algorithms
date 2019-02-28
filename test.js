
function setIt(x) {
  return () => console.log(x);
}

function hello() {
  for (var i = 0; i < 5; i++) {
    setTimeout(setIt(i), 0);
  }
}
hello();