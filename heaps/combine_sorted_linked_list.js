import {
  makeLinkedList,
  ListNode,
  logLinkedList,
} from "../linked_list/ListNode.js";

const a = [1, 6];
const b = [1, 4, 6];
const c = [3, 7];

const input = [makeLinkedList(a), makeLinkedList(b), makeLinkedList(c)];

const result = logLinkedList(combineSortedLinkedList(input));
console.log(result);

function combineSortedLinkedList(array) {
  const head = new ListNode();
  let ptr = head;
  heapify(array);

  while (ptr) {
    ptr.next = remove(array);
    ptr = ptr.next;
    if (ptr && ptr.next) insert(array, ptr.next);
  }
  return head.next;
}

function heapify(array) {
  const stack = [Math.floor(array.length) - 1];

  while (stack.length !== 0) {
    const parent = stack.pop();

    const left_child = 2 * parent + 1;
    const right_child = 2 * parent + 2;

    let smallest = parent;
    if (
      left_child < array.length &&
      array[left_child].val < array[smallest].val
    ) {
      smallest = left_child;
    }
    if (
      right_child < array.length &&
      array[right_child].val < array[smallest].val
    ) {
      smallest = right_child;
    }

    [array[parent], array[smallest]] = [array[smallest], array[parent]];

    if (parent > 0) stack.push(parent - 1);
    if (parent !== smallest) {
      stack.push(smallest);
    }
  }

  return array;
}

function remove(heap) {
  if (heap.length === 1) return heap.pop();
  const oldRoot = heap[0];
  heap[0] = heap.pop();

  const stack = [0];
  while (stack.length > 0) {
    const parent = stack.pop();

    const left_child = 2 * parent + 1;
    const right_child = 2 * parent + 2;

    let smallest = parent;
    if (left_child < heap.length && heap[left_child].val < heap[smallest].val) {
      smallest = left_child;
    }
    if (
      right_child < heap.length &&
      heap[right_child].val < heap[smallest].val
    ) {
      smallest = right_child;
    }

    [heap[parent], heap[smallest]] = [heap[smallest], heap[parent]];
    if (parent !== smallest && smallest < heap.length) stack.push(smallest);
  }

  return oldRoot;
}

function insert(heap, k) {
  heap.push(k);

  const stack = [Math.floor(heap.length / 2) - 1];

  while (stack.length !== 0) {
    const parent = stack.pop();
    const left_child = 2 * parent + 1;
    const right_child = 2 * parent + 2;

    let smallest = parent;
    if (left_child < heap.length && heap[left_child].val < heap[smallest].val) {
      smallest = left_child;
    }
    if (
      right_child < heap.length &&
      heap[right_child].val < heap[smallest].val
    ) {
      smallest = right_child;
    }

    [heap[parent], heap[smallest]] = [heap[smallest], heap[parent]];

    const next_parent = Math.floor(parent / 2);
    if (parent != 0 && stack.at(-1) !== next_parent) stack.push(next_parent);
    if (parent !== smallest) {
      stack.push(smallest);
    }
  }

  return heap;
}
