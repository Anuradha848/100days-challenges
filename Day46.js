//Day46 of 100Days of challenge
//Today’s Challenge - Token Ring Network Simulation 

//In computer networks, a Token Ring Protocol allows devices to pass a "token" around in a circular fashion
//  to control communication. Let’s simulate this using a Circular Linked List.

// 👉 Requirements:
// 1. AddNode → Insert a new computer/node into the circular network (end of list).
// 2. ShowNetwork → Traverse once and display all nodes in the ring.
// 3. PassToken(k) → Starting from head, simulate passing the token k times 
//    around the ring and print which node has the token at each step.



// Node class to represent each computer in the network
class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

// Token Ring Network using Circular Linked List
class TokenRingNetwork {
  constructor() {
    this.head = null;
  }

  //Add a new computer/node to the ring
  addNode(name) {
    const newNode = new Node(name);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head; 
      return;
    }

    let temp = this.head;
    while (temp.next !== this.head) {
      temp = temp.next;
    }

    temp.next = newNode;
    newNode.next = this.head; 
  }

  //Show all computers in the ring
  showNetwork() {
    if (!this.head) {
      console.log("Network is empty!");
      return;
    }

    let temp = this.head;
    const nodes = [];

    do {
      nodes.push(temp.name);
      temp = temp.next;
    } while (temp !== this.head);

    console.log(nodes.join(" -> "));
  }

  //Simulate token passing around the ring
  passToken(k) {
    if (!this.head) {
      console.log("No nodes in the network!");
      return;
    }

    let current = this.head;

    for (let i = 0; i < k; i++) {
      console.log(`Token at: ${current.name}`);
      current = current.next;
    }
  }
}

const network = new TokenRingNetwork();
network.addNode("ComputerA");
network.addNode("ComputerB");
network.addNode("ComputerC");

network.showNetwork();   // Output: ComputerA -> ComputerB -> ComputerC
network.passToken(6);   