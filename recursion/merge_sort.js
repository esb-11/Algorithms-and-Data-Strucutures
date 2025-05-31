console.log(mergeSort([3, 7, 1, 2, 6, 4, 5, 9, 8, 0]));

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left_half = mergeSort(array.slice(0, mid));
  const right_half = mergeSort(array.slice(mid));

  let left = 0;
  let right = 0;
  const sortedArray = [];
  while (left < left_half.length || right < right_half.length) {
    if (right >= right_half.length || left_half[left] < right_half[right]) {
      sortedArray.push(left_half[left]);
      left += 1;
    }
    else {
      sortedArray.push(right_half[right]);
      right += 1;
    }
  }

  return sortedArray;
}
