//Day57 of 100days of challenge

// Problem Statement: 
// You are given an encoded string where patterns are of the form k[encoded_string], 
// and the encoded_string inside the square brackets is repeated exactly k times. Return the decoded string.

// Node class for stack
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

//Examples
let testInputs = ["3[a]2[bc]", "3[a2[c]]", "2[abc]3[cd]ef"];

for (let s of testInputs) {
  let numStack = new Stack();
  let strStack = new Stack();
  let currentNum = 0;
  let currentStr = "";

  for (let ch of s) {
    if (!isNaN(ch)) {
      currentNum = currentNum * 10 + parseInt(ch);
    } else if (ch === "[") {
      numStack.push(currentNum);
      strStack.push(currentStr);
      currentNum = 0;
      currentStr = "";
    } else if (ch === "]") {
      let repeatTimes = numStack.pop();
      let prevStr = strStack.pop();
      currentStr = prevStr + currentStr.repeat(repeatTimes);
    } else {
      currentStr += ch;
    }
  }
  console.log(`Input: ${s} → Decoded String: ${currentStr}`);
}
