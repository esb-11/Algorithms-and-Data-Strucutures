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

  height(value) {
    let height = 0;
    const root = this.find(value);
    if (!root) return null;

    const stack = [[root.left, root.right]];

    while (stack.length !== 0) {
      const currNode = stack.at(-1);

      let node;
      if (currNode[0]) {
        node = currNode[0];
        currNode[0] = undefined;
      } else if (currNode[1]) {
        node = currNode[1];
        currNode[1] = undefined;
      } else {
        height = stack.length > height ? stack.length : height;
        stack.pop();
      }

      if (node) stack.push([node.left, node.right]);
    }

    return height - 1;
  }

  depth(value) {
    if (this.root.data === value) return 0;

    let stack = [[this.root.left, this.root.right]];

    while (stack.length !== 0) {
      const topOfStack = stack.at(-1);
      let node;

      if (topOfStack[0]) {
        node = topOfStack[0];
        topOfStack[0] = undefined;
      } else if (topOfStack[1]) {
        node = topOfStack[1];
        topOfStack[1] = undefined;
      } else {
        stack.pop();
      }

      if (node) {
        if (node.data === value) return stack.length;
        stack.push([node.left, node.right]);
      }
    }

    return null;
  }

  isBalanced(root = this.root) {
    if (!root) return 1;

    const left = this.isBalanced(root.left);
    const right = this.isBalanced(root.right);

    if (!left || !right) return false;

    const difference = left > right ? left - right : right - left;
    if (difference > 1) return false;

    return (left > right ? left : right) + 1;
  }

  rebalance() {
    const array = [];
    tree.inOrder((node) => {array.push(node.data)})
    this.root = this.buildTree(array);    
  }
}

const input = [];

for (let i = 0; i < 100; i++) {
  const randomNumber = Math.ceil(Math.random() * 100);
  input.push(randomNumber);
}

const tree = new Tree(input);

prettyPrint(tree.root);
console.log(tree.isBalanced());

for (let i = 0; i < 100; i++) {
  const randomNumber = Math.ceil(Math.random() * 100);
  tree.insert(randomNumber);
}

prettyPrint(tree.root);
console.log(tree.isBalanced());

tree.rebalance();
prettyPrint(tree.root);
console.log(tree.isBalanced());
