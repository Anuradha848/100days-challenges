//Day47 of 100Days of challenge
//Today’s Challenge - Modify Circular Linked List (Insertion, Deletion & Traversal)

//Imagine you’re maintaining a circular list of process IDs in an operating system scheduler. 
//The list must always remain sorted for efficient scheduling. You need to support the following operations:

// 👉 Requirements:
// 1. insert(value) → Insert a new process ID into the list in sorted order.
// 2. delete(value) → Remove one occurrence of a given process ID if it exists.
// 3. traverse() → Display all process IDs in the scheduler by traversing the circular list once.


// Node structure
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Circular Linked List (Scheduler)
class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  //Insert in sorted order
  insert(value) {
    const newNode = new Node(value);

    // Case 1: Empty list
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let current = this.head;

    // Case 2: Insert before head (new smallest)
    if (value < this.head.value) {
      // Find last node
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Case 3: Insert in middle or end
    while (current.next !== this.head && current.next.value < value) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  //Delete a specific value (if exists)
  delete(value) {
    if (!this.head) {
      console.log("List is empty!");
      return;
    }

    let current = this.head;
    let prev = null;

    // Case 1: Single node
    if (current.next === this.head && current.value === value) {
      this.head = null;
      return;
    }

    // Case 2: Deleting head node
    if (this.head.value === value) {
      // Find last node
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = this.head.next;
      this.head = this.head.next;
      return;
    }

    // Case 3: Deleting any other node
    prev = this.head;
    current = this.head.next;
    while (current !== this.head) {
      if (current.value === value) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
    }

    console.log(`Process ID ${value} not found.`);
  }

  //Traverse (display once)
  traverse() {
    if (!this.head) {
      console.log("[]");
      return;
    }

    let result = [];
    let current = this.head;
    do {
      result.push(current.value);
      current = current.next;
    } while (current !== this.head);

    console.log(result);
  }
}

//Example Usage
const scheduler = new CircularLinkedList();

scheduler.insert(3);
scheduler.insert(1);
scheduler.insert(2);
scheduler.traverse(); // [1, 2, 3]

scheduler.insert(0);
scheduler.traverse(); // [0, 1, 2, 3]

scheduler.delete(2);
scheduler.traverse(); // [0, 1, 3]

scheduler.delete(5);
scheduler.traverse(); // [0, 1, 3]