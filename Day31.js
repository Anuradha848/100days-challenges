//Day 31 of 100days of challenge
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    //Insert at end
    insertAtEnd(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    //Insert at beginning
    insertAtBeginning(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    //Delete by value (first occurrence)
    deleteByValue(value) {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        // If head itself is to be deleted
        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        } else {
            console.log("Value not found");
        }
    }
    //Delete by position (1-based)
    deleteAtPosition(pos) {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        // Delete head
        if (pos === 1) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let count = 1;

        while (current.next && count < pos - 1) {
            current = current.next;
            count++;
        }

        if (!current.next) {
            console.log("Invalid position");
            return;
        }

        current.next = current.next.next;
    }
    // Print list
     printList(){
        let result="";
        let temp=this.head;
        while(temp!==null){
            result+=temp.data+"->";
            temp=temp.next;
        }
        result+="null";
        console.log(result);
    }
}
let list = new LinkedList();

list.insertAtEnd(10);      // 10
list.insertAtEnd(20);      // 10 -> 20
list.insertAtEnd(30);      // 10 -> 20 -> 30
list.insertAtBeginning(5); // 5 -> 10 -> 20 -> 30
list.deleteByValue(20);    // 5 -> 10 -> 30
list.deleteAtPosition(2);  // 5 -> 30
list.printList();          // Output: 5 -> 30
