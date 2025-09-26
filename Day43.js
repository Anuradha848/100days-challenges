// Day 43 of 100Days challenge

// Today’s Challenge - Round-Robin Task Scheduler

// Imagine you’re building a Round-Robin Task Scheduler for a CPU. Tasks are executed in a circular order, which makes a Circular Linked List the perfect structure! 

// 👉 Requirements:
// 1. Add Task at End → Insert a new task into the scheduler (end of list).
// 2. Add Task at Beginning → Insert a new task at the start of the list.
// 3. Display Tasks Once → Traverse the list once and print all tasks in order.
// 4. Simulate One Round of Execution → Traverse the circular list and print tasks as if the CPU executed each task once in round-robin order.


// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Circular Linked List for Task Scheduler
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // 1. Add Task at End
    addTaskAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.tail.next = this.head; // Point tail to head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head; // Point tail to head
        }
    }
    // 2. Add Task at Beginning
    addTaskAtBeginning(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.tail.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
    }
    // 3. Display Tasks Once (one full cycle)
    displayTasksOnce() {
        if (!this.head) return;
        let result = [];
        let current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        console.log(result.join(" → "));
    }
    // 4. Simulate One Round of Execution (one full cycle)
    simulateOneRound() {
        if (!this.head) return;
        let current = this.head;
        do {
            console.log(`Executing Task: ${current.data}`);
            current = current.next;
        } while (current !== this.head);
    }
}

let scheduler = new CircularLinkedList();
scheduler.addTaskAtEnd("Task 1");
scheduler.addTaskAtEnd("Task 2");
scheduler.addTaskAtBeginning("Task 3");
scheduler.displayTasksOnce();  // Task 3 → Task 1 → Task 2
scheduler.simulateOneRound();   // Executes Task 3, Task 1, Task 2 in order