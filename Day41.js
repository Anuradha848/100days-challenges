// Day 41 of 100Days challenge
//Today, we’re stepping into Circular Linked Lists a powerful variation of linked lists where the last node points back to the head, forming a circle.

//Today’s Challenge - Circular Queue of Players 

//Imagine you’re designing a Game Queue System where players are arranged in a circle. This allows the game to cycle through players endlessly.
// Requirements:
// 1. Insert Player at End → Add a new player at the end of the circle.
// 2. Insert Player at Beginning → Add a new player at the start of the circle.
// 3. Traverse Forward → Print the players in circular order (stop once you complete one full cycle).
// 4. Traverse Multiple Rounds → Print players for k rounds to simulate the game cycling.

// Node class
class Node {
    constructor(data) { 
        this.data = data;
        this.next = null;
    }
}

// Circular Linked List for Game Queue
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 1. Insert Player at End
    insertPlayerAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.tail.next = this.head; // Point tail to head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head; // Point tail to head
        }
    }

    // 2. Insert Player at Beginning
    insertPlayerAtBeginning(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.tail.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
    }

    // 3. Traverse Forward (one full cycle)
    traverseForward() {
        if (!this.head) return;
        let result = [];
        let current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        console.log(result.join(" → "));
    }

    // 4. Traverse Multiple Rounds (k rounds = k full cycles)
    traverseMultipleRounds(k) {
        if (!this.head || k <= 0) return;
        let result = [];
        let current = this.head;
        let count = 0;
        let totalNodes = this.countNodes();
        let totalSteps = totalNodes * k; // full cycles
        while (count < totalSteps) {
            result.push(current.data);
            current = current.next;
            count++;
        }
        console.log(result.join(" → "));
    }

    // Helper: count nodes
    countNodes() {
        if (!this.head) return 0;
        let count = 0;
        let current = this.head;
        do {
            count++;
            current = current.next;
        } while (current !== this.head);
        return count;
    }
}

let gameQueue = new CircularLinkedList();
gameQueue.insertPlayerAtEnd("Alice");
gameQueue.insertPlayerAtEnd("Bob");
gameQueue.insertPlayerAtEnd("Charlie");
gameQueue.insertPlayerAtBeginning("Zara");

gameQueue.traverseForward();        // Zara → Alice → Bob → Charlie
gameQueue.traverseMultipleRounds(2); // Zara → Alice → Bob → Charlie → Zara → Alice → Bob → Charlie
