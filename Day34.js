// Node class
class Node {
  constructor(song) {
    this.song = song;
    this.next = null;
  }
}

// Playlist using Singly Linked List
class Playlist {
  constructor() {
    this.head = null;
  }

  // 1. Add Song at End
  addSongEnd(song) {
    const newNode = new Node(song);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
  }

  // 2. Add Song at Beginning
  addSongBeginning(song) {
    const newNode = new Node(song);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 3. Delete Song by Name (first occurrence)
  deleteSongByName(songName) {
    if (!this.head) return; // empty

    // If head is the target
    if (this.head.song === songName) {
      this.head = this.head.next;
      return;
    }

    let prev = null;
    let curr = this.head;
    while (curr && curr.song !== songName) {
      prev = curr;
      curr = curr.next;
    }

    if (!curr) return; // not found
    prev.next = curr.next;
  }

  // 4. Delete Song by Position (1-based)
  deleteSongByPosition(pos) {
    if (!this.head || pos < 1) return;

    if (pos === 1) {
      this.head = this.head.next;
      return;
    }

    let prev = null;
    let curr = this.head;
    let count = 1;
    while (curr && count < pos) {
      prev = curr;
      curr = curr.next;
      count++;
    }

    if (!curr) return;
    prev.next = curr.next;
  }

  // 5. Show Playlist
  showPlaylist() {
    const songs = [];
    let curr = this.head;
    while (curr) {
      songs.push(curr.song);
      curr = curr.next;
    }
    console.log(songs.length ? songs.join(" → ") : "No Songs");
  }
}
const pl = new Playlist();

pl.addSongEnd("Shape of You");
pl.addSongEnd("Believer");
pl.addSongBeginning("Perfect");

pl.showPlaylist(); // Perfect → Shape of You → Believer

pl.deleteSongByName("Believer");
pl.showPlaylist(); // Perfect → Shape of You

pl.deleteSongByPosition(2);
pl.showPlaylist(); // Shape of You
