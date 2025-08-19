//Day25 of 100days challenge
// Problem Statement:
//Today’s task is to implement insertion operations in a Singly Linked List.
class Node{
    constructor(data){
        this.data=data,
        this.next=null
    }
}
class linkedlist{
     constructor(){
        this.head=null;
     }

     //insertion at head
     insertionathead(data){
        const newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
        console.log(`Insert${data} at head->`+this.printlist())
     } 

     //insertion at a position
     insertAtposition(data,position){
       const newNode=new Node(data);
       if(position==0){
         this.prepend(data);
         return;
       }
       let current=this.head;
       let index=0;
       while(current!==null&&index<position-1){
        current=current.next;
        index++;
       }
       if(current===null){
        this.append(data);
       }else {
        newNode.next=current.next;
        current.next=newNode;
       }
       console.log(`Insert ${data} at a position ${position}->`+this.printlist())
     }

     //insertion at tail
     insertionAttail(data){
        let newNode=new Node(data);
        if(this.head===null){
            this.head=newNode;
            //console.log(`Insert ${data} at tail->`+this.printlist())
            return;
        }
        let current=this.head;
        while(current.next!==null){
            current=current.next;
        }
        current.next=newNode;
        console.log(`Insert ${data} at tail->`+this.printlist())
     } 

    // Print all nodes
    printlist() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        return result += "null";
       
    }
}

let list=new linkedlist();
list.insertionathead(10);
list.insertionAttail(20);
list.insertAtposition(15,1);

//output
//insert 10 at head = list:10->null
//insert 20 at tail = list:10->20->null
//insert 15 at position 1 = list:10->15->20->null