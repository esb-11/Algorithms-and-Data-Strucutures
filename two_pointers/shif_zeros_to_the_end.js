const nums = [0, 1, 0, 3, 2];

console.log(shiftZeros(nums));

function shiftZeros(array) {
    let left = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left += 1;
        }
    }

    return array;
}
