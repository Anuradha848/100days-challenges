// Day 42 of 100Days challenge
//Challenge - Insert into a Sorted Circular Linked List

// Requirements:
// 1.Given a sorted circular linked list, implement a function insert(head, insertVal) 
// which inserts insertVal in the right position so the list stays sorted.

// 2.If the list is empty (head is null), create a new node with insertVal that points to itself.

// 3. After inserting, traverse the full circular list from the insertion point (or any reference point)
//  to print all the node values in order until you come back to the starting node.

// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }   
}

// Circular Linked List
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert into sorted circular linked list
    insert(insertVal) {
        const newNode = new Node(insertVal);

        // Case 1: Empty list
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = newNode; // circular self-link
            return;
        }

        let current = this.head;
        let prev = this.tail;

        // Traverse until right spot found
        do {
            if (prev.data <= insertVal && insertVal <= current.data) {
                break; // between two nodes
            }
            if (prev.data > current.data) { // rotation point
                if (insertVal >= prev.data || insertVal <= current.data) {
                    break;
                }
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);

        // Insert newNode
        prev.next = newNode;
        newNode.next = current;

        // If inserted after tail, update tail
        if (prev === this.tail) {
            this.tail = newNode;
        }
    }

    // Traverse and print until back to start (inclusive)
    traverseFrom(node) {
        if (!node) return;
        let result = [];
        let current = node;
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== node);
        result.push(node.data);
        console.log(result.join(" → "));
    }

    traverse() {
        this.traverseFrom(this.head);
    }
}

let cll = new CircularLinkedList();
cll.insert(10);
cll.insert(20);
cll.insert(30);
cll.insert(40);
cll.insert(50);

cll.traverse();
