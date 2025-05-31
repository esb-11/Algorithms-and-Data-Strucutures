const input = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(firstAndLast(input, 4));

function firstAndLast(array, target) {
  let left = 0;
  let right = array.length;
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (array[mid] >= target) right = mid;
    else left = mid + 1;
  }

  if (array[left] != target) return [-1, -1];

  while (array[right + 1] === target) {
    right += 1;
  }

  return [left, right];
}
