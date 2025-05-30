import { ListNode, logLinkedList } from "./ListNode.js";

class MultiLevelListNode extends ListNode {
  constructor(val) {
    super(val);
    this.child;
  }
}

const nums = [1, 2, [6, 7, [10]], 3, 4, [8, [11], 9], 5];
const list = makeMultiLevelLinkedList(nums);

logLinkedList(flattenMultilevelList(list));

function makeMultiLevelLinkedList(nums) {
  const head = new MultiLevelListNode();

  let ptr = head;
  for (const num of nums) {
    if (Array.isArray(num)) {
      ptr.child = makeMultiLevelLinkedList(num);
      continue;
    }
    const node = new MultiLevelListNode(num);
    ptr.next = node;
    ptr = node;
  }

  return head.next;
}

function convertToString(head) {
  let levelString = "";
  let levelTransitionString = "";
  let hasNextLevel = false;

  let node = head;
  while (node) {
    if (node) {
      levelString += node.next ? `${node.val} -> ` : `${node.val}`;
      levelTransitionString += node.child ? "|    " : "     ";

      if (node.child) {
        hasNextLevel = true;
      }
    } else {
      levelString += "     ";
      levelTransitionString += "     ";
    }
    node = node.next;
  }

  levelTransitionString += "\n";

  let string = hasNextLevel
    ? levelString + "\n" + levelTransitionString
    : levelString;
  return string;
}

function flattenMultilevelList(head) {
  let tail = head;
  while (tail.next) {
    tail = tail.next;
  }

  let ptr = head;
  while (ptr) {
    if (ptr.child) {
      tail.next = ptr.child;
      ptr.child = undefined;
      while (tail.next) {
        tail = tail.next;
      }
    }
    ptr = ptr.next;
  }
  
  // const queue = [];
  // let ptr = head;
  // while (ptr) {
  //   if (ptr.child) {
  //     queue.push(ptr.child);
  //   }
  //   const nextNode = ptr.next ? ptr.next : queue.shift();
  //   ptr.next = nextNode;
  //   ptr = ptr.next;
  // }
  return head;
}
