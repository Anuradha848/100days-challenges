//Day36 of 100days challenge
//Today’s Challenge - Design a Playlist Manager (DLL Insertions & Traversal) 
//1. Add Song at Head → Insert a new song at the beginning.
//2. Add Song at Tail → Insert a new song at the end.
//3. Add Song at Index → Insert a song at a specific position (0-based index).
//4. Show Playlist Forward → Print songs from head to tail.
//5. Show Playlist Backward → Print songs from tail to head.


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
insertAtHead(data) {
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
insertAtTail(data) {
    const newNode = new Node(data);
    if (!this.tail) {
        this.head = this.tail = newNode;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
}
//insert at index
insertAtIndex(data, index) {
    if (index === 0) {
        this.insertAtStart(data);
        return;
    }
    const newNode = new Node(data);
    let current = this.head;
    let currentIndex = 0;
    while (current && currentIndex < index) {
        current = current.next;
        currentIndex++;
    }
    if (!current) {
        this.insertAtEnd(data);
    } else {
        newNode.prev = current.prev;
        newNode.next = current;
        if (current.prev) {
            current.prev.next = newNode;
        }
        current.prev = newNode;
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
Dll.insertAtHead("SongA");
Dll.insertAtTail("SongB");
Dll.insertAtTail("SongC");
Dll.insertAtIndex("SongX",1);
Dll.printList();
Dll.traverseForwardandBackward();

