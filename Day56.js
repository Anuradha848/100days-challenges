//Day56 of 100days of challenge

//Today’s Challenge - Daily Temperatures

// You’re given an array temperatures[] where each element represents the daily temperature.

// For each day, find out how many days you’ll have to wait until a warmer temperature.
// If there’s no future day for which this is possible, output 0 for that day.

// Node class for linked list stack
class Node {
  constructor(value) {
    this.value = value; 
    this.next = null;
  }
}

// Stack class using linked list
class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) return null;
    const popped = this.top.value;
    this.top = this.top.next;
    return popped;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.top === null;
  }
}

// Example 1
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
let n = temperatures.length;
let result = new Array(n).fill(0);
let stack = new Stack(); 

for (let i = 0; i < n; i++) {
  while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
    let idx = stack.pop();
    result[idx] = i - idx;
  }
  stack.push(i);
}

console.log("Input:", temperatures);
console.log("Daily Temperatures Result:", result);

//example 2
temperatures = [30, 40, 50, 60];
n = temperatures.length;
result = new Array(n).fill(0);
stack = new Stack();

for (let i = 0; i < n; i++) {
  while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
    let idx = stack.pop();
    result[idx] = i - idx;
  }
  stack.push(i);
}

console.log("\nInput:", temperatures);
console.log("Daily Temperatures Result:", result);
