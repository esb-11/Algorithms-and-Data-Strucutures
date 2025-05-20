const str = "bacdhers";

console.log(nextLexicographicalSequence(str));

function nextLexicographicalSequence(string) {
    let result = string;
    let right = string.length - 1;
    let left = string.length - 2;

    while (right >= 0) {
        const rightChar = string.charCodeAt(right);
        const leftChar = string.charCodeAt(left);

        if (leftChar < rightChar) {
            // pivot
        }

        left -= 1;
        right -= 1;
    }

    return result;
}
