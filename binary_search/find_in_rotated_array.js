const input = [8, 9, 1, 2, 3, 4, 5, 6, 7];

console.log(findInRotatedArray(input, 1));

function findInRotatedArray(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    console.log(mid);

    if (array[mid] === target) return mid;

    if (array[left] <= array[mid]) {
      if (target < array[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > array[mid] && target <= array[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
