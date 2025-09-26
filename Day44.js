// Day 44 of 100Days challenge

//  Today’s Challenge  Music Playlist (Circular Linked List) 

// 👉 Requirements:
// 1. Add Song at End → Insert a new song into the playlist (end of list).
// 2. Add Song at Beginning → Insert a new song at the start of the playlist.
// 3. Show Playlist → Traverse once and print all songs in the playlist order.
// 4. Play Songs in Loop → Traverse circularly and print the first k songs being played in order.

// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Circular Linked List for Music Playlist
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 1. Add Song at End
    addSongAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.tail.next = this.head; // circular link
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
    }

    // 2. Add Song at Beginning
    addSongAtBeginning(data) {
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

    // 3. Show Playlist
    showPlaylist() {
        if (!this.head) return;
        let result = [];
        let current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        console.log(result.join(" -> "));
    }

    // 4. Play Songs in Loop (k songs)
    playSongsInLoop(k) {
        if (!this.head || k <= 0) return;
        let current = this.head;
        for (let i = 0; i < k; i++) {
            console.log("Playing: " + current.data);
            current = current.next;
        }
    }
}

let playlist = new CircularLinkedList();
playlist.addSongAtEnd("Shape of You");
playlist.addSongAtEnd("Believer");
playlist.addSongAtBeginning("Senorita");

playlist.showPlaylist();       // Senorita -> Shape of You -> Believer
playlist.playSongsInLoop(5);   // Play 5 songs circularly
