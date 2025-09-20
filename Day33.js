//Day33 of 100days challenge
// Node class
class Node {
  constructor(task) {
    this.task = task;
    this.next = null;
  }
}

// Task Manager using Singly Linked List
class TaskManager {
  constructor() {
    this.head = null;
  }

  // 1. Add Task at End
  addTaskEnd(task) {
    const newNode = new Node(task);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  // 2. Add Task at Beginning
  addTaskBeginning(task) {
    const newNode = new Node(task);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 3. Delete Task by Name
  deleteTaskByName(taskName) {
    if (!this.head) return;

    // If head is the task
    if (this.head.task === taskName) {
      this.head = this.head.next;
      return;
    }

    let prev = null;
    let temp = this.head;
    while (temp && temp.task !== taskName) {
      prev = temp;
      temp = temp.next;
    }

    if (!temp) return; // Task not found
    prev.next = temp.next;
  }

  // 4. Delete Task by Position (1-based index)
  deleteTaskByPosition(pos) {
    if (!this.head) return;

    let temp = this.head;

    // If head needs to be removed
    if (pos === 1) {
      this.head = temp.next;
      return;
    }

    let prev = null;
    let count = 1;
    while (temp && count !== pos) {
      prev = temp;
      temp = temp.next;
      count++;
    }

    if (!temp) return; // Position out of range
    prev.next = temp.next;
  }

  // 5. Show Tasks
  showTasks() {
    let tasks = [];
    let temp = this.head;
    while (temp) {
      tasks.push(temp.task);
      temp = temp.next;
    }
    console.log(tasks.length ? tasks.join(" → ") : "No Tasks");
  }
}

const manager = new TaskManager();

manager.addTaskEnd("Finish Homework");
manager.addTaskEnd("Buy Groceries");
manager.addTaskBeginning("Morning Workout");
manager.showTasks();   // Morning Workout → Finish Homework → Buy Groceries

manager.deleteTaskByName("Buy Groceries");
manager.showTasks();   // Morning Workout → Finish Homework

manager.deleteTaskByPosition(2);
manager.showTasks();   // Finish Homework
