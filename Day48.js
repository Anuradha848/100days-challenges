//Day48 of 100Days of challenge
//Today’s Challenge - Round Table Meeting Simulation 

//Imagine you’re simulating a Round Table Meeting where each participant is seated in a circular manner. 
//The order is maintained using a Circular Linked List.

// 👉 Requirements:
// 1. addParticipant(name) → Insert a new participant at the end of the round table.
// 2. removeParticipant(name) → Remove a participant by their name (if they exist).
// 3. showParticipants() → Traverse the circular table once and display all participants.
// 4. skipAndSelect(k) → Starting from the current participant, move k steps forward and print the selected
//    participant’s name (like passing a mic in the meeting).


// Node to represent each participant
class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

// Circular Linked List for Round Table Meeting
class RoundTable {
  constructor() {
    this.head = null;
    this.current = null; // tracks current participant (for skipAndSelect)
  }

  // 1️⃣ Add a participant at the end
  addParticipant(name) {
    const newNode = new Node(name);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      this.current = this.head;
      return;
    }

    let temp = this.head;
    while (temp.next !== this.head) {
      temp = temp.next;
    }

    temp.next = newNode;
    newNode.next = this.head;
  }

  // 2️⃣ Remove a participant by name
  removeParticipant(name) {
    if (!this.head) {
      console.log("No participants in the meeting!");
      return;
    }

    let current = this.head;
    let prev = null;

    // Case 1: Only one participant
    if (current.next === this.head && current.name === name) {
      this.head = null;
      this.current = null;
      return;
    }

    // Case 2: Removing the head
    if (this.head.name === name) {
      // Find last node
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = this.head.next;
      this.head = this.head.next;
      if (this.current && this.current.name === name) {
        this.current = this.head;
      }
      return;
    }

    // Case 3: Removing any other participant
    prev = this.head;
    current = this.head.next;
    while (current !== this.head) {
      if (current.name === name) {
        prev.next = current.next;
        if (this.current && this.current.name === name) {
          this.current = prev.next;
        }
        return;
      }
      prev = current;
      current = current.next;
    }

    console.log(`${name} not found in the meeting.`);
  }

  // 3️⃣ Show all participants once around the table
  showParticipants() {
    if (!this.head) {
      console.log("No participants at the table!");
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

  // 4️⃣ Skip k participants and select the next one
  skipAndSelect(k) {
    if (!this.current) {
      console.log("No participants available for selection!");
      return;
    }

    for (let i = 0; i < k; i++) {
      this.current = this.current.next;
    }

    console.log(`Selected: ${this.current.name}`);
  }
}

// 🚀 Example Usage
const meeting = new RoundTable();

meeting.addParticipant("Alice");
meeting.addParticipant("Bob");
meeting.addParticipant("Charlie");
meeting.addParticipant("Diana");

meeting.showParticipants();    // Alice -> Bob -> Charlie -> Diana
meeting.skipAndSelect(3);      // Selected: Diana

meeting.removeParticipant("Charlie");
meeting.showParticipants();    // Alice -> Bob -> Diana
meeting.skipAndSelect(1);      // Selected: Bob
