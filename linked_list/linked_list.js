import { ListNode, makeLinkedList, makeLinkedListsWithIntersection, logLinkedList } from "../fast_and_slow_pointers/ListNode.js";

class DoubleLinkedNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev;
    this.next;
  }
}

const [linkedList1, linkedList2] = makeLinkedListsWithIntersection(
  [1, 3, 4],
  [6, 4],
  [8, 7, 2]
);

// logLinkedList(linkedListIntersection(linkedList1, linkedList2));

const LRU = LRUCache(3);
LRU.put(1, 100);
LRU.put(2, 250);
LRU.get(2);
LRU.put(4, 300);
LRU.put(3, 200);
LRU.get(4);
LRU.get(1);

// Exercises
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

function reverseLinkedListRecursive(head) {
  if (!head || !head.next) {
    return head;
  }

  new_head = reverseLinkedListRecursive(head.next);
  head.next.next = head;
  head.next = undefined;
  return new_head;
}

function removeKthLastNode(header, k) {
  const startNode = new ListNode(undefined, header);
  let leader = startNode;
  let trailer = startNode;
  for (let i = 0; i < k; i++) {
    leader = leader.next;
    if (!leader) {
      return header;
    }
  }
  while (leader.next) {
    leader = leader.next;
    trailer = trailer.next;
  }
  trailer.next = trailer.next.next;
  return startNode.next;
}

function linkedListIntersection(head1, head2) {
  let node1 = head1;
  let node2 = head2;
  while (node1 != node2) {
    node1 = node1 ? node1.next : head2;
    node2 = node2 ? node2.next : head1;
  }
  return node1;
}

function LRUCache(capacity) {
  const hashmap = {};
  let head = new DoubleLinkedNode(-1, -1);
  let tail = new DoubleLinkedNode(-1, -1);
  head.next = tail;
  tail.prev = head;

  function get(key) {
    if (!hashmap[key]) return -1;
    removeNode(hashmap[key]);
    addToTail(hashmap[key]);
    return hashmap[key].val;
  }

  function put(key, value) {
    if (hashmap[key]) removeNode(hashmap[key]);
    const node = new DoubleLinkedNode(key, value);
    hashmap[key] = node;
    if (capacity <= 0) {
      delete hashmap[head.next.key];
      removeNode(head.next);
    } else {
      capacity -= 1;
    }
    addToTail(node);
  }

  function addToTail(node) {
    let prev_node = tail.prev;
    node.prev = prev_node;
    node.next = tail;
    prev_node.next = node;
    tail.prev = node;
  }

  function removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  return { get, put };
}
