class Queue {
  constructor() {
    this.head;
  }

  enqueue(value) {
    const node = new Node();
    node.value = value;
    node.prev = this.head;
    this.head = node;
    return this.head.value;
  }

  dequeue() {
    if (!this.head) return;
    const node = this.head;

    this.head = this.head.prev;
    node.prev = undefined;

    return node.value;
  }

  peek() {
    return this.head.value;
  }
}

class Node {
  constructor() {
    this.value;
    this.prev;
  }
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.dequeue());
console.log(queue.enqueue(3));
console.log(queue.peek());
