//Day58 of 100days of challenge

// Problem Statement
// You are required to implement a Queue data structure using an array (or list in JavaScript).
// Your queue should support the following operations:
// * enqueue(x) → Add element x to the rear of the queue.
// * dequeue() → Remove and return the front element.
// * front() → Return the front element without removing it.
// * isEmpty() → Return true if the queue is empty, else false.
// * size() → Return the total number of elements in the queue.

class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to rear
  enqueue(x) {
    this.items.push(x);
  }

  // Remove and return front element
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return null;
    }
    return this.items.shift(); // remove first element
  }

  // Return front element without removing
  front() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return null;
    }
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return size of queue
  size() {
    return this.items.length;
  }

  // Display current queue
  display() {
    console.log(this.items.join(" "));
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Dequeue:", queue.dequeue()); // 10
queue.enqueue(40);
console.log("Front element:", queue.front()); // 20
console.log("Queue size:", queue.size()); // 3
console.log("Current Queue:");
queue.display(); // 20 30 40
