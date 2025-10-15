//Day53 of 100days of challenge

//Today’s Challenge - Implement a Stack and Perform All Operations

// A Stack is a LIFO (Last In, First Out) data structure - the element inserted last is the first to be removed.
// You’ll implement your own stack and perform Push, Pop, Peek, and Display operations.

// 👉 Requirements:

// 1. Implement Stack using Array or Linked List (your choice).
// 2. Perform the following operations:
// * Push: Add an element to the stack.
// * Pop: Remove the top element.
// * Peek/Top: View the top element without removing it.
// * Display: Print all elements of the stack.
// 3. Handle edge cases:

// Stack Overflow (if using fixed size array).

// Stack Underflow (when trying to pop from empty stack).


class Stack {
  constructor(maxSize) {
    this.stack = [];
    this.maxSize = maxSize || 5; // default size
  }

  // Push operation
  push(element) {
    if (this.stack.length >= this.maxSize) {
      console.log("Stack Overflow! Cannot push:", element);
      return;
    }
    this.stack.push(element);
    console.log(`Pushed ${element}`);
  }

  // Pop operation
  pop() {
    if (this.stack.length === 0) {
      console.log("Stack Underflow! Nothing to pop.");
      return;
    }
    const popped = this.stack.pop();
    console.log(`Popped ${popped}`);
  }

  // Peek (Top) operation
  peek() {
    if (this.stack.length === 0) {
      console.log("Stack is empty!");
      return;
    }
    console.log(`Top element: ${this.stack[this.stack.length - 1]}`);
  }

  // Display all elements
  display() {
    if (this.stack.length === 0) {
      console.log("Stack is empty!");
      return;
    }
    console.log("Stack elements:", this.stack.slice().reverse().join(" "));
  }
}

const stack = new Stack(5);

stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.push(40);
stack.peek();
stack.display();
