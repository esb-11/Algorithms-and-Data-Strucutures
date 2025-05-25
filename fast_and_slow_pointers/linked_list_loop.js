import { ListNode, makeLinkedList, logLinkedList } from "./ListNode.js";

const nums = [0, 1, 2, 3, 4, 5];
const linkedList = makeLinkedList(nums);

// make a linked list loop
let tail = linkedList;
while (tail.next) {
  tail = tail.next;
}

let node = linkedList;
while (node.val != 2) {
  node = node.next;
}
tail.next = node;

console.log(linkedListLoop(linkedList));

function linkedListLoop(head) {
  if (!head.next) {
    return false;
  }
  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next ? fastPtr.next : fastPtr;
    fastPtr = fastPtr.next ? fastPtr.next : fastPtr;
    if (fastPtr == slowPtr) {
      return true;
    }
  }

  return false;
}
