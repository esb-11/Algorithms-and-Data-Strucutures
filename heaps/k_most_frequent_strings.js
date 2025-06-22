const input = ["go", "coding", "byte", "byte", "go", "interview", "go"];

class Pair {
  constructor(str, freq) {
    this.str = str;
    this.freq = freq;
  }
}

console.log(mostFrequentString(input, 2));

function mostFrequentString(array, k) {
  const hashmap = {};

  for (const string of array) {
    hashmap[string] = hashmap[string] ? hashmap[string] + 1 : 1;
  }

  const max_heap = [];
  for (const str in hashmap) {
    const pair = new Pair(str, hashmap[str]);
    max_heap.push(pair);
  }

  heapify(max_heap);

  let result;
  for (let i = 0; i < k; i++) {
    result = pop(max_heap);
  }

  return result;
}

function heapify(array) {
  console.log(array);
  
  const stack = [Math.floor(array.length) - 1];

  while (stack.length !== 0) {
    const parent = stack.pop();

    const left_child = 2 * parent + 1;
    const right_child = 2 * parent + 2;

    let largest = parent;
    if (
      left_child < array.length &&
      array[left_child].freq > array[largest].freq
    ) {
      largest = left_child;
    }
    if (
      right_child < array.length &&
      array[right_child].freq > array[largest].freq
    ) {
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

function pop(heap) {
  const oldRoot = heap[0];
  heap[0] = heap.pop();

  const stack = [0];
  while (stack.length > 0) {
    const parent = stack.pop();
    
    const left_child = 2 * parent + 1;
    const right_child = 2 * parent + 2;

    let largest = parent;
    if (left_child < heap.length && heap[left_child].freq > heap[largest].freq) {
      largest = left_child;
    }
    if (right_child < heap.length && heap[right_child].freq > heap[largest].freq) {
      largest = right_child;
    }
    
    [heap[parent], heap[largest]] = [heap[largest], heap[parent]];
    if (parent !== largest && largest < heap.length) stack.push(largest);
  }

  return oldRoot;
}
