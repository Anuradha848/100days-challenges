//Day28 of 100days challenge
class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //get length of list
    getLength() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    //check for duplicate
    contains(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) return true;
            current = current.next;
        }
        return false;
    }

    // Insert at a given position with rules
    insertAtPosition(data, position) {
        // Step 1: duplicate check
        if (this.contains(data)) {
            console.log("Duplicate Entry Not Allowed");
            return;
        }

        // Step 2: get length
        const length = this.getLength();

        // Step 3: position validation
        if (position < 1 || position > length + 1) {
            console.log("Invalid Position");
            return;
        }

        const newNode = new Node(data);

        // Case 1: Insert at head
        if (position === 1) {
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) this.tail = newNode; 
        }
        // Case 2: Insert at tail
        else if (position === length + 1) {
            if (this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
            } else {
                this.head = this.tail = newNode;
            }
        }
        // Case 3: Insert in middle
        else {
            let current = this.head;
            let index = 1;
            while (index < position - 1) {
                current = current.next;
                index++;
            }
            newNode.next = current.next;
            current.next = newNode;
        }

        this.printList();
    }

    // Print list
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

let list = new LinkedList();
list.insertAtPosition(1, 1);   // 1 -> null
list.insertAtPosition(2, 2);   // 1 -> 2 -> null
list.insertAtPosition(4, 3);   // 1 -> 2 -> 4 -> null
list.insertAtPosition(5, 4);   // 1 -> 2 -> 4 -> 5 -> null
list.insertAtPosition(3, 3);   // 1 -> 2 -> 3 -> 4 -> 5 -> null
list.insertAtPosition(2, 2);   // Duplicate Entry Not Allowed
list.insertAtPosition(6, 10);  // Invalid Position
