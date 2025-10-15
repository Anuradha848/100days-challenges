//Day50 of 100Days of challenge
//Today’s Challenge - Reverse a Linked List

//Imagine you are building a playlist app or task manager. For certain features, you need to reverse 
//the order of your items efficiently.

// 👉 Requirements:
// 1. Given a singly linked list, reverse it in-place (without using extra arrays).
// 2. Implement a function reverseLinkedList(head) that returns the new head after reversal.
// 3. Traverse the reversed list to display all node values.


// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Function to reverse a singly linked list
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;   // store next node
    current.next = prev;   // reverse the link
    prev = current;        // move prev forward
    current = next;        // move current forward
  }

  return prev; // new head
}

// Helper function to print linked list
function printLinkedList(head) {
  let result = [];
  let temp = head;
  while (temp !== null) {
    result.push(temp.value);
    temp = temp.next;
  }
  console.log(result.join(" -> "));
}

// 🚀 Example Usage
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original Linked List:");
printLinkedList(head);

head = reverseLinkedList(head);

console.log("Reversed Linked List:");
printLinkedList(head);
