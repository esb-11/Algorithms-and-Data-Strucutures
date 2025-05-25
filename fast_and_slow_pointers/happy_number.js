import { ListNode } from "./ListNode.js";

console.log(happyNumber(23));

function happyNumber(number) {
  const head = new ListNode(number);

  let slowPtr = head;
  let fastPtr = head;

  do {
    for (let i = 0; i < 2; i++) {
      if (fastPtr.val == 1) return true;
      fastPtr = next(fastPtr);
    }
    slowPtr = slowPtr.next;
  } while (slowPtr.val != fastPtr.val);

  return false;
}

function makeNode(number) {
  let temp = number;
  let result = 0;

  while (temp != 0) {
    result += (temp % 10) ** 2;
    temp = parseInt(temp/10);
  }

  return new ListNode(result);
}

function next(fastPtr) {
    fastPtr.next = makeNode(fastPtr.val);
    return fastPtr.next;
}
