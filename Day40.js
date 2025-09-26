// Day 40 of 100Days challenge
//Today’s Challenge - Design Twitter Feed 

//You are asked to design a simplified version of a Twitter feed system, where tweets are stored in a Doubly Linked List.
// Requirements:
// 1. Post Tweet (Insert at Head) → Every new tweet appears at the top of the feed.
// 2. Delete Oldest Tweet (Delete at Tail) → Remove the last tweet when feed gets too long.
// 3. Delete Tweet at Index → Delete a tweet at a given position (0-based).
// 4. Show Feed Forward → Print tweets from newest to oldest.
// 5. Show Feed Backward → Print tweets from oldest to newest.

// Node class
class Node {
    constructor(data) { 
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// Doubly Linked List for Twitter Feed
class TwitterFeed {
    constructor() {
        this.head = null;
        this.tail = null;
    }       
    // 1. Post Tweet (Insert at Head)
    postTweet(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    // 2. Delete Oldest Tweet (Delete at Tail)
    deleteOldestTweet() {
        if (!this.tail) {
            console.log("Feed is empty");
            return;
        }
        if (!this.tail.prev) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next.prev = null;
            this.tail.next = null;
        }
    }
    // 3. Delete Tweet at Index (0-based)
    deleteTweetAtIndex(pos) {   
        if (pos < 0 || !this.head) {
            console.log("Invalid position or feed is empty");
            return;
        }

        let current = this.head;
        let index = 0;

        while (current && index < pos) {
            current = current.next;
            index++;
        }

        if (!current) {
            console.log("Invalid position");
            return;
        }

        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;

        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = current.prev;
    }
    // 4. Show Feed Forward (Newest to Oldest)
    showFeedForward() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log("Forward:", result.join(" → "));
    }
    // 5. Show Feed Backward (Oldest to Newest)
    showFeedBackward() {
        let current = this.tail;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.prev;
        }
        console.log("Backward:", result.join(" → "));
    }
}

// --- Test Run ---
let feed = new TwitterFeed();   
feed.postTweet("Hello");
feed.postTweet("Learning DSA");
feed.postTweet("Doubly Linked List is fun!");
feed.showFeedForward();
feed.deleteTweetAtIndex(1);
feed.showFeedForward();
feed.deleteOldestTweet();
feed.showFeedForward();
feed.showFeedBackward();