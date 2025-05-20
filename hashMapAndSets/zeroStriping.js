const testMatrix = [
    [1, 2, 3, 4, 5],
    [6, 0, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 0],
];

console.log(zeroStriping(testMatrix));

function zeroStriping(matrix) {
    const height = matrix.length;
    const width = matrix[0].length;

    const rows = {};
    const columns = {};

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];

        for (let j = 0; j < row.length; j++) {
            const value = row[j];

            if (value === 0) {
                rows[i] = true;
                columns[j] = true;
            }
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (rows[i] || columns[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}
