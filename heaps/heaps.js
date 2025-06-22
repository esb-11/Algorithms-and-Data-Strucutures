// left child = 2 * i + 1
// right child = 2 * i + 2
// parent = i / 2 - 1

function heapify(array) {
  const stack = [Math.floor(array.length) - 1];

  while (stack.length !== 0) {
    const parent = stack.pop();

    const left_child = 2 * parent + 1;
    const right_child = 2 * parent + 2;

    let largest = parent;
    if (left_child < array.length && array[left_child] > array[largest]) {
      largest = left_child;
    }
    if (right_child < array.length && array[right_child] > array[largest]) {
      largest = right_child;
    }

    [array[parent], array[largest]] = [array[largest], array[parent]];

    if (parent > 0) stack.push(parent - 1);
    if (parent !== largest) {
      stack.push(largest);
    }
  }

  return array;
}

function insert(heap, k) {
  heap.push(k);

  const stack = [Math.floor(heap.length / 2) - 1];

  while (stack.length !== 0) {
    const parent = stack.pop();
    const left_child = 2 * parent + 1;
    const right_child = 2 * parent + 2;

    let largest = parent;
    if (left_child < heap.length && heap[left_child] > heap[largest]) {
      largest = left_child;
    }
    if (right_child < heap.length && heap[right_child] > heap[largest]) {
      largest = right_child;
    }

    [heap[parent], heap[largest]] = [heap[largest], heap[parent]];

    const next_parent = Math.floor(parent / 2);
    if (parent != 0 && stack.at(-1) !== next_parent) stack.push(next_parent);
    if (parent !== largest) {
      stack.push(largest);
    }
  }

  return heap;
}

function remove(heap) {
  const oldRoot = heap[0];
  heap[0] = heap.pop();

  const stack = [0];
  while (stack.length > 0) {
    const parent = stack.pop();
    
    const left_child = 2 * parent + 1;
    const right_child = 2 * parent + 2;

    let largest = parent;
    if (left_child < heap.length && heap[left_child] > heap[largest]) {
      largest = left_child;
    }
    if (right_child < heap.length && heap[right_child] > heap[largest]) {
      largest = right_child;
    }
    
    [heap[parent], heap[largest]] = [heap[largest], heap[parent]];
    if (parent !== largest && largest < heap.length) stack.push(largest);
  }

  return oldRoot;
}

function peek(heap) {
  return heap[0];
}

export { heapify, insert, remove, peek }
