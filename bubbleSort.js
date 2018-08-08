function countSwaps(a) {
  let swaps = 0;
  let swapped = false;

  while (!swapped) {
    swapped = true;
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let large = a[i];
        a[i] = a[i + 1];
        a[i + 1] = large;
        swapped = false;
        swaps += 1;
      }
    }
  }
  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}