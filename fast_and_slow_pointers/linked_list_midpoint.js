import { makeLinkedList, logLinkedList } from "../linked_list/ListNode.js";

const nums = [0, 1, 2, 3, 4, 5, 6];
const linkedList = makeLinkedList(nums);

logLinkedList(linkedList);
console.log(linkedListMidpoint(linkedList));

// Return the middle point of linked list
function linkedListMidpoint(head) {
  let slowPtr = head;
  let fastPtr = head;
  
  while(fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next ? fastPtr.next : fastPtr;
    fastPtr = fastPtr.next ? fastPtr.next : fastPtr;
  }

  return slowPtr;
}
