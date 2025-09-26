//Day38 of 100Days challenge
// Today’s Challenge - Text Editor with Undo/Redo (DLL Insertions, Deletions & Traversal) 
//1. Insert Action at End → Add a new action (like “Type A” or “Delete B”) at the end of the list.
//2. Undo → Move one step backward in the DLL and show the previous action.
//3. Redo → Move one step forward in the DLL and show the next action.
//4. Delete Last Action → Remove the most recent action from the history.
//5. Show History Forward → Print all actions from start to end.
//6. Show History Backward → Print all actions from end to start.

// Class Node
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    addAction(data) {
        const newNode = new Node(data);

        // If we are not at the tail (after undo), cut off the redo branch
        if (this.current && this.current !== this.tail) {
            let temp = this.current.next;
            while (temp) {
                let next = temp.next;
                temp.prev = temp.next = null;
                temp = next;
            }
            this.current.next = null;
            this.tail = this.current;
        }

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.current = this.tail;
        console.log(this.current.data); // print action as soon as it's added
    }

    deleteActionAtEnd() {
        if (!this.tail) {
            console.log("list is empty");
            return;
        }

        if (!this.tail.prev) {
            this.head = this.tail = null;
            this.current = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            if (this.current && !this.current.next) {
                this.current = this.tail;
            }
        }
    }

    viewForward() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log("Forward:", result.join(" → "));
    }

    viewBackward() {
        let current = this.tail;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.prev;
        }
        console.log("Backward:", result.join(" → "));
    }

    undo() {
        if (!this.current) {
            console.log("nothing to undo");
        } else if (this.current.prev) {
            this.current = this.current.prev;
            console.log(this.current.data);
        } else {
            console.log("no current action"); 
        }
    }

    redo() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            console.log(this.current.data);
        } else {
            console.log("no action to redo");
        }
    }
}

let DLL = new DoublyLinkedList();
DLL.addAction("Type A");    // prints Type A
DLL.addAction("Type B");    // prints Type B
DLL.addAction("Type C");    // prints Type C
DLL.viewForward();          // Type A → Type B → Type C
DLL.viewBackward();         // Type C → Type B → Type A
