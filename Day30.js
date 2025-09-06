//Day 30 of 100days of challenge
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

        if (!this.head) {   // empty list
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
    //Delete from beginning
    deleteFromBeginning() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        this.head = this.head.next;
    }
    //Delete from end
    deleteFromEnd() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        // If only one node
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null;  // remove last node
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
console.log("insert 10 at end")
list.insertAtEnd(10);       // 10
console.log("insert 20 at end")
list.insertAtEnd(20);       // 10 -> 20
console.log("insert 5 at begining")
list.insertAtBeginning(5);  // 5 -> 10 -> 20
console.log("delete from end")
list.deleteFromEnd();       // 5 -> 10
console.log("delete from begining")
list.deleteFromBeginning(); // 10
list.printList();           // Output: 10



