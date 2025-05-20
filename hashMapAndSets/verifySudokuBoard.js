const testBoard = [
    [3, 0, 6, 0, 5, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [1, 0, 2, 5, 0, 0, 3, 2, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [0, 3, 0, 0, 0, 8, 2, 5, 0],
    [0, 1, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 0, 0, 0],
];

console.log(verifySudokuBoard(testBoard));

function verifySudokuBoard(board) {
    let columnsHash = {};

    let rowHash = {};

    let subgrids = [
        {}, {}, {},
    ];

    let currentSubgrid = 0;
    for (let i = 0; i < board.length; i++) {
        if (parseInt(i / 3) != currentSubgrid) {
            currentSubgrid = parseInt(i / 3);
            subgrids = [
                {}, {}, {},
            ];
        }

        for (let j = 0; j < board.length; j++) {
            const rowPointer = board[i][j];
            const columnPointer = board[j][i];

            if (
                (rowHash[rowPointer] && rowPointer != 0) ||
                (columnsHash[columnPointer] && columnPointer != 0) ||
                (subgrids[parseInt(j / 3)][rowPointer] && rowPointer != 0)
            ) {
                return false;
            }

            rowHash[rowPointer] = [i, j];
            columnsHash[columnPointer] = [j, i];
            subgrids[parseInt(j / 3)][rowPointer] = [i, j];
        }
        rowHash = {};
        columnsHash = {};
    }

    return true;
}
