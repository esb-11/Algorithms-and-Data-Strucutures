const test = [1, 6, 2, 5, 8, 7, 10, 3];

console.log(longestChainOfConsecutiveNumbers(test));

function longestChainOfConsecutiveNumbers(array) {
    let longestCain = 0;
    const hash = {};

    for (number of array) {
        hash[number] = true;
    }

    for (let i = 0; i < array.length; i++) {
        if (!hash[array[i] - 1]) {
            let chain = 0;
            while (hash[array[i] + chain]) {
                chain += 1;
            }
            if (chain > longestCain) {
                longestCain = chain;
            }
        }
    }

    return longestCain;
}
