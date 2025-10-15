//Day52 of 100days 0f challenge

//Today’s Challenge - Reverse a Name using Doubly Linked List 

//Imagine you are storing a person’s name in a Doubly Linked List, where each character is stored as a node. Your task is to print the name in reverse by traversing backward.

// 👉 Requirements:
// 1. Insert each character of the name into a Doubly Linked List.
// 2. Traverse forward to print the name normally.
// 3. Think of how you can reverse name in Doubly 

// Node class for Doubly Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// Doubly Linked List class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert a character at the end
  insert(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // Traverse forward
  printForward() {
    let temp = this.head;
    let result = "";
    while (temp) {
      result += temp.data;
      if (temp.next) result += " -> ";
      temp = temp.next;
    }
    console.log("Forward Traversal:", result);
  }

  // Traverse backward
  printBackward() {
    let temp = this.tail;
    let result = "";
    while (temp) {
      result += temp.data;
      if (temp.prev) result += " -> ";
      temp = temp.prev;
    }
    console.log("Backward Traversal:", result);
  }
}

const name = "Anuradha";
const dll = new DoublyLinkedList();

for (let ch of name) {
  dll.insert(ch);
}

dll.printForward();  
dll.printBackward();  

