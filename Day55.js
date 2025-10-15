//Day55 of 100days of challenge

//today’s Challenge - Next Greater Element

// Problem Statement:
// Given an array of integers, for each element, find the next greater element to its right.
// If no greater element exists, return -1 for that element.

// Node class for linked list
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

// Input array
let arr = [4, 5, 2, 25];
let n = arr.length;
let result = new Array(n).fill(-1);
let stack = new Stack();

for (let i = n - 1; i >= 0; i--) {
  while (!stack.isEmpty() && stack.peek() <= arr[i]) {
    stack.pop();
  }
  if (!stack.isEmpty()) {
    result[i] = stack.peek();
  }
  stack.push(arr[i]);
}

console.log("Input:", arr);
console.log("Next Greater Elements:", result);


arr = [13, 7, 6, 12];
n = arr.length;
result = new Array(n).fill(-1);
stack = new Stack();

for (let i = n - 1; i >= 0; i--) {
  while (!stack.isEmpty() && stack.peek() <= arr[i]) {
    stack.pop();
  }
  if (!stack.isEmpty()) {
    result[i] = stack.peek();
  }
  stack.push(arr[i]);
}

console.log("\nInput:", arr);
console.log("Next Greater Elements:", result);
