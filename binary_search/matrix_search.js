<<<<<<< HEAD
const input = [
  [2, 3, 4, 6],
  [7, 10, 11, 17],
  [20, 21, 24, 33],
];

console.log(matrixSearch(input, 21));

function matrixSearch(matrix, target) {
  let left = 0;
  let right = (matrix.length * matrix[0].length) - 1;

  while (left < right) {}

  return false;
}
=======
const input = [
  [2, 3, 4, 6],
  [7, 10, 11, 17],
  [20, 21, 24, 33],
];

console.log(searchMatrix(input, 21));

function searchMatrix(matrix, target) {
  const rowLength = matrix[0].length;
  const totalLength = matrix.length * rowLength;

  let left = 0;
  let right = totalLength - 1;

  while (left <= right) {
    console.log(`${left} ${right}`);
    
    let mid = Math.floor((left + right) / 2);
    let r = Math.floor(mid / rowLength);
    let c = mid % rowLength;

        console.log(`${r} ${c}`);
    const midValue = matrix[r][c];
    console.log(midValue);

    if (midValue == target) {
      return true;
    }

    if (target > midValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
>>>>>>> 1a20502ed9a865bdff6041c523b827285956a1bd
