const input = ["go", "coding", "byte", "byte", "go", "interview", "go"];

console.log(mostFrequent(2, input));

function mostFrequent(k, array) {
  const hashmap = {};
  const frequencies = [];

  for (const string of array) {    
    if (typeof hashmap[string] == "undefined") {      
      hashmap[string] = frequencies.length;
      
      frequencies.push({str: string, freq: 0});
    }

    frequencies[hashmap[string]].freq += 1;
  }

  const heap = heapify(frequencies);

  return heap;
}

function heapify(array) {
  let head = makeNode(array[0]);
  
  for (let i = 1; i < array.length; i++) {
    const node = makeNode(array[i]);
    if (node.freq > head.freq) {
      node.left = head;
      head = node;
    } else if (node.freq === head.freq) {
      
    }
  }

  return head
}

function makeNode(obj) {
  obj.left = null;
  obj.right = null;
  return obj;
}
