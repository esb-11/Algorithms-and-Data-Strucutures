import { makeLinkedList, logLinkedList } from "../linked_list/ListNode.js";

const nums = [0, 1, 2, 3, 4, 5];
const linkedList = makeLinkedList(nums);

loopLinkedList(linkedList, 2);

console.log(linkedListLoop(linkedList));

// Determine if a linked list has a loop
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
