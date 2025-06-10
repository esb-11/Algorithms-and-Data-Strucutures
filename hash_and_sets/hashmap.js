class Node {
  constructor(value, key) {
    this.value = value;
    this.key = key;
  }
}

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.array = [];
    this.length = 0;
  }

  hash(key) {
    let hashCode = 0;

    let primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const node = new Node(value, key);
    const index = this.hash(key);

    if (this.array[index] && this.append(index, node)) {
      this.length += 1;
    } else if (!this.array[index]) {
      this.array[index] = node;
      this.length += 1;
    }

    if (this.length > this.capacity * this.loadFactor) {
      grow();
    }
  }

  append(index, node) {
    let ptr = this.array[index];
    while (ptr.next) {
      if (ptr.key == key) {
        ptr.value = value;
        return false;
      }
      ptr = ptr.next;
    }
    ptr.next = node;
    return true;
  }

  grow() {}

  find(key) {
    const index = this.hash(key);

    let ptr = this.array[index];
    while (ptr) {
      if (ptr.key == key) return ptr;
      ptr = ptr.next;
    }
  }

  get(key) {
    const node = this.find(key);
    if (node) return node.value;
  }

  has(key) {
    return !!this.find(key);
  }

  remove(key) {
    const index = this.hash(key);
    let ptr = this.array[index];
    
    if (!ptr) return;
    
    if (ptr.key == key) {
      this.array[index] = ptr.next;
      this.length -= 1;
      return;
    }

    while (ptr.next) {
      if (ptr.next.key == key) {
        ptr.next = ptr.next.next;
        this.length -= 1;
      }
    }
  }

  clear() {
    this.array = [];
  }

  keys() {}
}

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.remove("hat");
console.log(test.get("hat"));
console.log(test.get("grape"));
