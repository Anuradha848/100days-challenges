//Day27 of 100days challenge
//single linked list operations-insertion at head,tail,and at a given position
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Linked list class
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insertion at head
    insertAtHead(data) {
        const newNode = new Node(data);
        if (!this.head) {  
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        console.log(`Insert ${data} at head -> ${this.printList()}`);
    }

    // Insertion at tail
    insertAtTail(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;   
        }
        console.log(`Insert ${data} at tail -> ${this.printList()}`);
    }

    // Insert at given 1-based position
    insertionAtPosition(data, position) {
        if (position < 1) {
            console.log(`Invalid position (position starts at 1).`);
            return;
        }

        const newNode = new Node(data);
        if (position === 1) {
            newNode.next=this.head;
            this.head=newNode;
            if (!this.tail) this.tail = newNode; 
            console.log(`Insert ${data} at position ${position} → ${this.printList()}`);
            return;
        }

        
        let current = this.head;
        let index = 1;

    
        while (current !== null && index < position - 1) {
            current = current.next;
            index++;
        }

        if (current === null) {
            console.log("position out of range.");
            return;
        }

        newNode.next = current.next;
        current.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode;  
        }

        console.log(`Insert ${data} at position ${position} -> ${this.printList()}`);
    }

    // Print list
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        return result + "null";
    }
}

let list = new LinkedList();
list.insertAtHead(50);          // 50 -> null
list.insertAtTail(200);         // 50 -> 200 -> null
list.insertionAtPosition(100,2);// 100 -> 50 -> 200 -> null
list.insertionAtPosition(150,3);// 100 -> 150 -> 50 -> 200 -> null
list.insertionAtPosition(250,5);// 100 -> 150 -> 50 -> 250 -> 200 -> null
list.insertionAtPosition(300,7);//position out of range
