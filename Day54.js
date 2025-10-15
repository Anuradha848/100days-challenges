//Day54 of 100days of challenge

//Today’s Challenge - Check for Balanced Parentheses

// This is a very common interview problem asked by top tech companies to test your stack logic and problem-solving skills.

// Problem Statement:
// Given a string containing only the characters '(', ')', '{', '}', '[', and ']', determine whether the input string is valid.
// A string is considered valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

// Node class for Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack class implemented using Linked List
class Stack {
  constructor() {
    this.top = null;
  }

  // Push an element onto the stack
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  // Pop the top element
  pop() {
    if (!this.top) return null;
    const popped = this.top.value;
    this.top = this.top.next;
    return popped;
  }

  // Peek top element
  peek() {
    return this.top ? this.top.value : null;
  }

  // Check if stack is empty
  isEmpty() {
    return this.top === null;
  }
}

let testCases = ["()[]{}", "(]", "{[()]}"];

for (let str of testCases) {
  let stack = new Stack();
  let isValid = true;

  for (let ch of str) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else {
      if (stack.isEmpty()) {
        isValid = false;
        break;
      }

      let top = stack.pop();

      if (
        (ch === ')' && top !== '(') ||
        (ch === '}' && top !== '{') ||
        (ch === ']' && top !== '[')
      ) {
        isValid = false;
        break;
      }
    }
  }

  if (!stack.isEmpty()) isValid = false;
  console.log(`Input: ${str} → ${isValid ? "Valid ✅" : "Invalid ❌"}`);
}