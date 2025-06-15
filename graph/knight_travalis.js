class Node {
  constructor(position, possibleMoves) {
    this.position = position;
    this.possibleMoves = possibleMoves;
    this.next = null;
    this.prev = null;
  }
}

function knightMoves(start, end) {
  const root = new Node(
    start,
    makeMove(start, end),
  );
  const path = [];
  let bestPath;

  let node = root;
  while (root.possibleMoves.length > 0) {
    path.push(node.position);

    if (node.position[0] == end[0] && node.position[1] == end[1]) {
      if (!bestPath) {
        bestPath = [...path];
      } else {
        bestPath = bestPath.length > path.length ? [...path] : bestPath;
      }
    }
    
    while (node.possibleMoves.length === 0 || (bestPath && path.length >= bestPath.length)) {
      node = node.prev;
      path.pop();
    }

    const nextMove = node.possibleMoves.pop();
    const nextNode = new Node(nextMove, makeMove(nextMove, end, path));
    
    node.next = nextNode;
    nextNode.prev = node;
    node = nextNode;
  }

  return bestPath.join(" -> ");;
}

function makeMove(coord, end, path = []) {
  let moves = getPossibleMoves(coord);

  moves = filterMoves(moves, path);

  sortMoves(moves, end);

  return moves;
}

function getPossibleMoves(coord) {
  const [x, y] = coord;
  if (x > 7 || x < 0 || y > 7 || y < 0) return [];

  const moves = [
    [1, 2],
    [-1, 2],
    [-1, -2],
    [1, -2],
    [2, 1],
    [-2, 1],
    [-2, -1],
    [2, -1],
  ];
  const possibleMoves = [];

  for (let move of moves) {
    const newX = x + move[0];
    if (newX > 7 || newX < 0) continue;

    const newY = y + move[1];
    if (newY > 7 || newY < 0) continue;

    possibleMoves.push([newX, newY]);
  }

  return possibleMoves;
}

function filterMoves(moves, path) {
  return moves.filter((value) => {
    for (const move of path) {      
      if (value[0] == move[0] && value[1] == move[1]) {
        return false;
      }
    }
    return true;
  });
}

function sortMoves(moves, end) {
  moves.sort((a, b) => {
    const aDist = Math.abs(a[0] - end[0]) + Math.abs(a[1] - end[1]);
    const bDist = Math.abs(b[0] - end[0]) + Math.abs(b[1] - end[1]);
    return bDist - aDist;
  });
}

console.log(knightMoves([0, 0], [7,7]));
