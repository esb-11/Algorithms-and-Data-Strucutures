const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (!node) {
    return;
  }
  if (node.right) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    array = this.removeDuplicates(array);
    array.sort((a, b) => a - b);

    const left = 0;
    const right = array.length - 1;

    const root = this.makeNode(left, right, array);

    return root;
  }

  removeDuplicates(array) {
    const result = [];
    const hashmap = {};

    for (let i = 0; i < array.length; i++) {
      if (!hashmap[array[i]]) result.push(array[i]);
      hashmap[array[i]] = true;
    }

    return result;
  }

  makeNode(left, right, array) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new Node(array[mid]);

    node.left = this.makeNode(left, mid - 1, array);
    node.right = this.makeNode(mid + 1, right, array);

    return node;
  }

  insert(value) {
    let node = this.root;

    while (true) {
      if (value > node.data) {
        if (!node.right) {
          node.right = new Node(value);
          break;
        }
        node = node.right;
      } else {
        if (!node.left) {
          node.left = new Node(value);
          break;
        }
        node = node.left;
      }
    }
  }

  getSuccessor(root) {
    let node = root.right;
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  delete(target, root = this.root) {
    if (!root) return;

    if (root.data > target) {
      root.left = this.delete(target, root.left);
    } else if (root.data < target) {
      root.right = this.delete(target, root.right);
    } else {
      if (!root.left) {
        return root.right;
      }

      if (!root.right) {
        return root.left;
      }

      const succ = this.getSuccessor(root);
      root.data = succ.data;
      root.right = this.delete(succ.data, root.right);
    }
    return root;
  }

  find(target) {
    let node = this.root;
    while (node) {
      if (node.data === target) return node;
      node = target > node.data ? node.right : node.left;
    }
  }

  levelOrder(callback) {
    if (!callback) {
      throw new Error("Callback missing");
    }
    const queue = [this.root];

    while (queue.length !== 0) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      callback(node);
    }
  }

  inOrder(callback, root = this.root) {
    if (!callback) {
      throw new Error("Callback missing");
    }
    if (root.left) this.inOrder(callback, root.left);
    callback(root);
    if (root.right) this.inOrder(callback, root.right);
  }

  preOrder(callback, root = this.root) {
    if (!callback) {
      throw new Error("Callback missing");
    }
    callback(root);
    if (root.left) this.preOrder(callback, root.left);
    if (root.right) this.preOrder(callback, root.right);
  }

  postOrder(callback, root = this.root) {
    if (!callback) {
      throw new Error("Callback missing");
    }
    if (root.left) this.postOrder(callback, root.left);
    if (root.right) this.postOrder(callback, root.right);
    callback(root);
  }

  height(value) {}

  depth(value) {}

  isBalanced() {}

  rebalance() {}
}

const input = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree(input);
prettyPrint(tree.root);
tree.postOrder((node) => {
  console.log(node.data);
});
