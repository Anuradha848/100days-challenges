//Day 39 of 100Days challenge
//Today’s Challenge - Browser Tabs Manager (DLL Insertions, Deletions & Traversal) 

//Imagine you’re designing a Browser Tabs Manager. Each tab is represented as a node in a Doubly Linked List,
//allowing quick navigation forward and backward.

//Requirements:
// 1. Open New Tab at End → Insert a new tab at the end.
// 2. Open New Tab at Position → Insert a new tab at a given position (0-based).
// 3. Close Tab at Position → Delete the tab at a given position.
// 4. Move Next Tab → Traverse forward by one step.
// 5. Move Previous Tab → Traverse backward by one step.
// 6. Show All Tabs Forward → Print tabs left to right.
// 7. Show All Tabs Backward → Print tabs right to left.


// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// Doubly Linked List for Browser Tabs
class BrowserTabs {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    // 1. Open new tab at end
    openTabAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = this.current = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // 2. Open new tab at position (0-based)
    openTabAtPosition(data, pos) {
        const newNode = new Node(data);
        if (pos === 0) {
            newNode.next = this.head;
            if (this.head) this.head.prev = newNode;
            this.head = newNode;
            if (!this.tail) this.tail = newNode;
            return;
        }

        let current = this.head;
        let index = 0;

        while (current && index < pos - 1) {
            current = current.next;
            index++;
        }

        if (!current) {
            this.openTabAtEnd(data); 
            return;
        }

        newNode.next = current.next;
        if (current.next) current.next.prev = newNode;
        current.next = newNode;
        newNode.prev = current;

        if (newNode.next === null) this.tail = newNode;
    }

    // 3. Close tab at position
    closeTabAtPosition(pos) {
        if (!this.head) return;

        if (pos === 0) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            else this.tail = null;
            return;
        }

        let current = this.head;
        let index = 0;

        while (current && index < pos) {
            current = current.next;
            index++;
        }

        if (!current) return;

        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;

        if (current === this.tail) this.tail = current.prev;
    }

    // 4. Move next tab
    moveNext() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            console.log(this.current.data);
        }
    }

    // 5. Move previous tab
    movePrevious() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev;
            console.log(this.current.data);
        }
    }

    // 6. Show all tabs forward
    showTabsForward() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" → "));
    }

    // 7. Show all tabs backward
    showTabsBackward() {
        let current = this.tail;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.prev;
        }
        console.log(result.join(" → "));
    }
}

let browser = new BrowserTabs();

browser.openTabAtEnd("Google");
browser.openTabAtEnd("LinkedIn");
browser.openTabAtEnd("YouTube");
browser.openTabAtEnd("GitHub");
browser.showTabsForward();       // Google → LinkedIn → YouTube → GitHub
browser.closeTabAtPosition(2);
browser.showTabsForward();       // Google → LinkedIn → GitHub
browser.current = browser.head;  // Start at Google
browser.moveNext();              // LinkedIn
browser.movePrevious();          // Google
browser.moveNext();              // LinkedIn
browser.moveNext();              // GitHub
browser.showTabsBackward();      // GitHub → LinkedIn → Google
