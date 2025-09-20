//Day37 of 100Days challenge
// Today’s Challenge - Music Playlist Editor (DLL Insertions, Deletions & Traversal) 
//1. Add Song at Head → Insert a new song at the beginning.
//2. Add Song at Tail → Insert a new song at the end.
//3. Add Song at Index → Insert a song at a specific position (0-based index).
//4. Delete Song at Head → Remove the first song.
//5. Delete Song at Tail → Remove the last song.
//6. Delete Song at Index → Remove the song at a specific position.
//7. Show Playlist Forward → Traverse from head to tail.
//8. Show Playlist Backward → Traverse from tail to head.

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
        this.insertAtHead(data);
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
        this.insertAtHead(data);
    } else {
        newNode.prev = current.prev;
        newNode.next = current;
        if (current.prev) {
            current.prev.next = newNode;
        }
        current.prev = newNode;
    }
}
//delete at start
deleteAtHead() {
    if (!this.head) return;
    if (this.head === this.tail) {
        this.head = this.tail = null;
    } else {
        this.head = this.head.next;
        this.head.prev = null;
    }
}
//delete at end
deleteAtTail() {
    if (!this.tail) return;
    if (this.head === this.tail) {
        this.head = this.tail = null;
    } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}
//delete at index
deleteAtIndex(index) {
    if (index === 0) {
        this.deleteAtHead();
        return;
    }
    let current = this.head;
    let currentIndex = 0;
    while (current && currentIndex < index) {
        current = current.next;
        currentIndex++;
    }
    if (current) {
        current.prev.next = current.next;
        if (current.next) {
            current.next.prev = current.prev;
        }
    }
}
// forward and backward
Forward() {
    let forward = [];
    let current = this.head;
    while (current) {
      forward.push(current.data);
      current = current.next;
    }
    console.log("Forward:",forward.join(" ⇄ "))
}
Backward() {
    let backward = [];
    let current = this.tail;
    while (current) {
        backward.push(current.data);
        current = current.prev;
    }
    console.log("Backward:",backward.join(" ⇄ "));
}
//print list
   printList() {
    let current = this.head;
    let result = [];
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    console.log("Playlist:", result.join(" ⇄ "));
   }
}
let Dll=new DoublyLinkedList();
Dll.insertAtHead("SongA");
Dll.insertAtTail("SongB");
Dll.insertAtTail("SongC");
Dll.Forward();
Dll.insertAtIndex("SongX",1);
Dll.deleteAtIndex(2);
Dll.Forward();
Dll.Backward();
Dll.deleteAtHead();
Dll.deleteAtTail();
Dll.Forward();
