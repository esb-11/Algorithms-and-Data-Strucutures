const input = [1,2,4,5,7,8,9];

console.log(findTheInsertionIndex(input, 4));
console.log(findTheInsertionIndex(input, 6));

function findTheInsertionIndex(array, target) {
  let left = 0;
  let right = array.length;
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (array[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return left;
}
