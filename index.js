function selectionSort(array) {
  // go through array setting array[i] as the lowest value each time (final iteration not needed as it will already be the largest number)
  for (let i = 0; i < array.length - 1; i++) {
    // store min value and its index
    let min = { index: i, value: array[i] };

    // iterate through rest of array to establish min value
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min.value) {
        min.value = array[j];
        min.index = j;
      }
    }

    // swap current element with min element
    [array[i], array[min.index]] = [array[min.index], array[i]];
  }
  return array;
}

console.log(
  selectionSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92,
  ])
);
