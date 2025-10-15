//DAy45 of 100days of challaenge
//Today’s Challenge - Circular Queue of Printers 

//Imagine you’re designing a Printer Queue System for an office. Multiple printers are connected in a circular network, and print jobs are assigned in a round-robin fashion.


// 👉 Requirements:
// 1. AddPrinter → Insert a new printer into the circular queue (end of list).
// 2. ShowPrinters → Traverse once and print all printers in the queue.
// 3. AssignJobs(k) → Simulate job assignment for k jobs in round-robin order (traverse circularly k times 
//    and print the printer assigned each job).

// Node structure representing each printer
class PrinterNode {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

// Circular Queue for Printers
class PrinterQueue {
  constructor() {
    this.head = null;
  }

  //Add a new printer to the circular queue
  addPrinter(name) {
    const newPrinter = new PrinterNode(name);

    if (!this.head) {
      this.head = newPrinter;
      newPrinter.next = this.head;
      return;
    }

    let temp = this.head;
    while (temp.next !== this.head) {
      temp = temp.next;
    }

    temp.next = newPrinter;
    newPrinter.next = this.head;
  }

  //Display all printers once
  showPrinters() {
    if (!this.head) {
      console.log("No printers in the queue!");
      return;
    }

    let result = [];
    let temp = this.head;
    do {
      result.push(temp.name);
      temp = temp.next;
    } while (temp !== this.head);

    console.log(result.join(" -> "));
  }

  //Assign print jobs in round-robin fashion
  assignJobs(k) {
    if (!this.head) {
      console.log("No printers available for job assignment!");
      return;
    }

    let current = this.head;
    for (let i = 0; i < k; i++) {
      console.log(`Job assigned to: ${current.name}`);
      current = current.next; 
    }
  }
}

//Example Usage
const printers = new PrinterQueue();

printers.addPrinter("Printer1");
printers.addPrinter("Printer2");
printers.addPrinter("Printer3");

printers.showPrinters();   // Printer1 -> Printer2 -> Printer3
printers.assignJobs(7);    // Simulate 7 job assignments