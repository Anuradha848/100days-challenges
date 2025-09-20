//Day32 of 100days of challenge
class Node {
    constructor(url) {
        this.url = url;
        this.next = null;
    }
}
// BrowserHistory class
class BrowserHistory {
    constructor() {
        this.head = null;
        this.current = null;
    }

    //Visit new URL → insert at end, and move current to it
    visit(url) {
        let newNode = new Node(url);

        if (!this.head) {
            this.head = newNode;
            this.current = newNode;
        } else {
            // If visiting new page after going back,
            // we should clear forward history
            this.current.next = newNode;
            this.current = newNode;
        }
        console.log(this.current.url);
    }

    //Back → move one step backward
    back() {
        if (this.current === this.head) {
            console.log("No previous page");
            console.log(this.current.url);
            return;
        }

        let temp = this.head;
        while (temp && temp.next !== this.current) {
            temp = temp.next;
        }

        if (temp) {
            this.current = temp;
            console.log(this.current.url);
        }
    }

    //Forward → move one step forward
    forward() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            console.log(this.current.url);
        } else {
            console.log("No forward page");
            console.log(this.current.url);
        }
    }

    //Show current page
    showCurrent() {
        if (this.current) {
            console.log(this.current.url);
        } else {
            console.log("No pages visited");
        }
    }
}
let history = new BrowserHistory();

history.visit("google.com");       // google.com
history.visit("github.com");       // github.com
history.visit("linkedin.com");     // linkedin.com
history.back();                    // github.com
history.forward();                 // linkedin.com
history.visit("stackoverflow.com");// stackoverflow.com (clears forward history)
history.showCurrent();             // stackoverflow.com
