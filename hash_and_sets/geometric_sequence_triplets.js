const test = [2, 1, 2, 4, 8, 8];

console.log(geometricSequenceTriplets(test, 2));

function geometricSequenceTriplets(array, ratio) {
    let result = 0;
    const hash = {};

    for (let i = 0; i < array.length; i++) {
        hash[array[i]] = hash[array[i]] ? hash[array[i]] : [];
        hash[array[i]].push(i);
    }

    for (let i = 0; i < array.length; i++) {
        const secondValue = array[i];
        const firstValue = secondValue / ratio;
        const thirdValue = secondValue * ratio;

        if (hash[firstValue] && hash[thirdValue]) {
            const left = hash[firstValue];
            let leftFrequency = 0;
            for (let j = 0; j < left.length; j++) {
                if (left[j] < i) {
                    leftFrequency += 1;
                }
            }

            let right = hash[thirdValue];
            let rightFrequency = 0;
            for (let j = 0; j < right.length; j++) {
                if (right[j] > i) {
                    rightFrequency += 1;
                }
            }

            result += (leftFrequency * rightFrequency);
        }
    }

    return result;
}
