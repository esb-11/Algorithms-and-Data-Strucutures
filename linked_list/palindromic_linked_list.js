import { makeLinkedList, logLinkedList } from "./ListNode.js";

const nums1 = [1, 2, 3, 2, 1];
const list1 = makeLinkedList(nums1);

const nums2 = [1, 2, 1, 2];
const list2 = makeLinkedList(nums2);

console.log(palindromicLinkedList(list1));
console.log(palindromicLinkedList(list2));

function palindromicLinkedList(head) {
  let [mid, tail] = linkedListMidpoint(head);

  reverseLinkedList(mid);

  let ptr1 = head;
  let ptr2 = tail;

  while (ptr1 && ptr2) {
    console.log(`${ptr1.val} - ${ptr2.val}`);
    if (ptr1.val !== ptr2.val) {
      return false
    }
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return true;
}

function linkedListMidpoint(head) {
  let slowPtr = head;
  let fastPtr = head;
  
  while(fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next ? fastPtr.next : fastPtr;
    fastPtr = fastPtr.next ? fastPtr.next : fastPtr;
  }

  return [slowPtr, fastPtr];
}

function reverseLinkedList(header) {
  let currentNode = header;
  let previousNode;
  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}
