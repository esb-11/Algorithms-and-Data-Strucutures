const input = [2,6,3,8];

console.log(cuttingWood(input, 7));

function cuttingWood(array, k) {
  let left = 0;
  let right = array.reduce((total, value) => { return value > total ? value : total });
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2) + 1;
    let total = 0;
    
    for (const number of array) {
      total += number - mid > 0 ? number - mid : 0;
    }

    if (total < k) right = mid - 1;
    else left = mid;
  }

  return left;
}
