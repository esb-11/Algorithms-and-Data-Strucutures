const input = [1, 4, 3, 2, 3];

console.log(localMaxima(input));

function localMaxima(array) {
  let left = 1;
  let right = array.length - 2;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (array[mid] > array[mid + 1]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}
