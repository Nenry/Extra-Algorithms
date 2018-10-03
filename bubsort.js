function bubbleSort(array) {
  //iterate through and checks neighbor

  let swapped = false;

  while (!swapped) {
    swapped = true;

    for(let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const holder = array[i + 1];
        array[i + 1] = array[i];
        array[i] = holder;
        swapped = false;
      }

    }


  }

  console.log(array);



}

bubbleSort([2, 4, 5, 1, 6, 7]);