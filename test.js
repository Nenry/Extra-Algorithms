const keyS= {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

for (let i = 1; i <= 5; i++) {
  setTimeout(() => console.log(1, keyS[i]), 1000);
;
}

for (let i = 0; i <= 5; i++) {
  
  setTimeout(() => console.log(2, keyS[i]), 1001);
}
