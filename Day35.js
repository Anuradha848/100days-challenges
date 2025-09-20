//Day35 of 100days challenge
// Today’s Challenge - Photo Gallery Viewer (DLL Insertions & Traversal)
//1. Add Photo at End → Insert a new photo into the gallery (at the end).
//2. Add Photo at Beginning → Insert a new photo at the start.
//3. View Gallery Forward → Traverse forward to display photos in order.
//4. View Gallery Backward → Traverse backward to display photos in reverse order.

//class for Node
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

//class for Doubly Linked List
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
//insert at start
insertAtStart(data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }
}
//insert at end
insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.tail) {
        this.head = this.tail = newNode;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
}
//traverse forward and backward
traverseForwardandBackward() {
    let forward = [];
    let current = this.head;
    while (current) {
      forward.push(current.data);
      current = current.next;
    }

    let backward = [];
    current = this.tail;
    while (current) {
      backward.push(current.data);
      current = current.prev;
    }

    console.log("Forward:", forward.join(" ⇄ "));
    console.log("Backward:", backward.join(" ⇄ "));
  }
//print list
   printList() {
    let current = this.head;
    let result = [];
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(" ⇄"));
   }
}
let Dll=new DoublyLinkedList();
Dll.insertAtEnd("p1");
Dll.insertAtEnd("p2");
Dll.insertAtStart("p0");
Dll.insertAtEnd("p3");
Dll.printList();
Dll.traverseForwardandBackward();
