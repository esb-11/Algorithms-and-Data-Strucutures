class ListNode {
  constructor(val) {
    this.val = val;
    this.next;
    this.prev;
  }
}

function makeLinkedList(array) {
  let nextNode;

  for (let i = array.length - 1; i >= 0; i--) {
    const currentNode = new ListNode(array[i]);
    currentNode.next = nextNode;
    nextNode = currentNode;
  }

  return nextNode;
}

function makeLinkedListsWithIntersection(
  uniqueValues1,
  uniqueValues2,
  commonValues
) {
  const list1 = makeLinkedList(uniqueValues1);
  const list2 = makeLinkedList(uniqueValues2);
  const intersection = makeLinkedList(commonValues);

  let node;

  node = list1;
  while (node.next) {
    node = node.next;
  }
  node.next = intersection;

  node = list2;
  while (node.next) {
    node = node.next;
  }
  node.next = intersection;

  return [list1, list2];
}

function loopLinkedList(linkedList, loopPoint) {
  let tail = linkedList;
  while (tail.next) {
    tail = tail.next;
  }

  let node = linkedList;
  while (node.val != loopPoint) {
    node = node.next;
  }
  tail.next = node;
}

function logLinkedList(listHeader) {
  // return;
  let string = "";
  let currentNode = listHeader;

  while (currentNode) {
    string += currentNode.next
      ? `${currentNode.val} -> `
      : `${currentNode.val}`;
    currentNode = currentNode.next;
  }

  console.log(string);
}

export {
  ListNode,
  makeLinkedList,
  makeLinkedListsWithIntersection,
  loopLinkedList,
  logLinkedList,
};
