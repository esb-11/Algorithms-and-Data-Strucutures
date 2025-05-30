const nums = [2, 7, 8, 3, 7, 6];

console.log(nums);
console.log(largestContainer(nums));

function randomArray() {
    const array = [];
    for (let i = 0; i < 10; i++) {
        const num = parseInt(Math.random(10) * 10);
        array.push(num);
    }
    return array;
}

function pairSum(array, start, target) {
    const result = [];

    let left = start;
    let right = array.length - 1;

    while (left < right) {
        const sum = array[left] + array[right];
        if (sum > target) {
            right -= 1;
        } else if (sum < target) {
            left += 1;
        } else {
            result.push([array[left], array[right]]);
            left += 1;
            while (array[left] === array[left - 1]) {
                left += 1;
            }
        }
    }

    return result;
}

function triplet(array) {
    const result = [];
    array.sort((a, b) => { return a - b });

    for (let i = 0; i <= (array.length - 3); i++) {
        if (array[i] > 0) break;
        if (i > 0 && array[i] === array[i - 1]) continue;

        const pairs = pairSum(array, i + 1, -array[i]);

        for (const pair of pairs) {
            result.push([array[i], ...pair]);
        }
    }

    return result;
}

function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        const leftChar = string.at(left);
        const rightChar = string.at(right);

        if (!(isAlphabeticalChar(leftChar)) && !(isNumericChar(leftChar))) {
            left += 1;
            continue;
        }

        if (!isAlphabeticalChar(rightChar) && !isNumericChar(rightChar)) {
            right -= 1;
            continue;
        }

        if (leftChar != rightChar) {
            return false;
        }

        left += 1;
        right -= 1;
    }

    return true;
}

function isNumericChar(char) {
    const charCode = char.charCodeAt(0);
    return (charCode >= 48 && charCode <= 57);
}

function isAlphabeticalChar(char) {
    const charCode = char.charCodeAt(0);
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
}

function largestContainer(array) {
    let biggestArea = 0;

    let left = 0;
    let right = array.length - 1;

    let i = left;
    let j = right;

    while (i < j) {
        const height = array[i] > array[j] ? array[j] : array[i];
        const width = j - i;
        const area = height * width;
        
        biggestArea = area > biggestArea ? area : biggestArea;

        if (array[left] < array[right]) {
            i += 1;
        } else if (array[right] < array[left]) {
            j -= 1;
        } else {
            i += 1;
            j -= 1
        }
    }

    return (biggestArea);
}
