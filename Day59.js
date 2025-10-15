//Day59 of 100days of challenge

// Problem Statement

// Given an integer K and a Queue of integers, your task is to reverse the first K elements of the queue 
// while leaving the other elements in the same relative order.

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(x) {
    this.items.push(x);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  display() {
    console.log(this.items.join(" "));
  }
}

function reverseFirstK(queue, K) {
  if (queue.isEmpty() || K <= 0) return;

  let stack = [];
  K = Math.min(K, queue.size()); 

  // Step 1: Dequeue first K elements into stack
  for (let i = 0; i < K; i++) {
    stack.push(queue.dequeue());
  }

  // Step 2: Pop from stack and enqueue back → reversed
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }

  // Step 3: Move remaining elements to rear to maintain order
  let remaining = queue.size() - K;
  for (let i = 0; i < remaining; i++) {
    queue.enqueue(queue.dequeue());
  }
}

//Example
let queue = new Queue();
[10, 20, 30, 40, 50].forEach(x => queue.enqueue(x));

console.log("Original Queue:");
queue.display();

let K = 3;
reverseFirstK(queue, K);

console.log(`Queue after reversing first ${K} elements:`);
queue.display();
