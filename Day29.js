//Day 29 of 100days of challenge.
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
    insertAt(pos, data) {
        let newNode = new Node(data);

        // Insert at head
        if (pos === 1) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let count = 1;

        // Traverse to position - 1
        while (current && count < pos - 1) {
            current = current.next;
            count++;
        }

        if (!current) {
            console.log("Invalid position");
            return;
        }

        newNode.next = current.next;
        current.next = newNode;
    }

    // Delete at a given position
    deleteAt(pos) {
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

        while (current && count < pos - 1) {
            current = current.next;
            count++;
        }

        if (!current || !current.next) {
            console.log("Invalid position");
            return;
        }

        current.next = current.next.next;
    }
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
console.log("insert 10 at position 1:")
list.insertAt(1, 10);  // Insert 10 at pos 1
console.log("insert 20 at position 2:")
list.insertAt(2, 20);  // Insert 20 at pos 2
console.log("insert 30 at position 3:")
list.insertAt(3, 30);  // Insert 30 at pos 3
console.log("delete a node atb position 1:")
list.deleteAt(1);      // Delete node at pos 1
console.log("Final output:")
list.printList();      // Output: 20 -> 30



