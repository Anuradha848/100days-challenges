//Day49 of 100Days of challenge
//Today’s Challenge - Carousel Ad Rotation System 

//Imagine you are designing an ad rotation system for a website. Ads are displayed in a loop
//(after the last ad, the cycle returns to the first). We’ll use a Circular Linked List to manage this.

// 👉 Requirements:
// 1. addAd(adName) → Insert a new ad at the end of the circular list.
// 2. removeAd(adName) → Delete the first occurrence of the ad.
// 3. showAds() → Traverse the list once and display all ads in rotation order.
// 4. rotateAndShow(k) → Starting from the head ad, rotate k times and show which ad is currently being displayed.


// Node to represent each Ad
class AdNode {
  constructor(adName) {
    this.adName = adName;
    this.next = null;
  }
}

// Circular Linked List for Ad Rotation System
class CarouselAdSystem {
  constructor() {
    this.head = null;
  }

  //Add a new Ad at the end
  addAd(adName) {
    const newAd = new AdNode(adName);

    if (!this.head) {
      this.head = newAd;
      newAd.next = this.head; 
      return;
    }

    let temp = this.head;
    while (temp.next !== this.head) {
      temp = temp.next;
    }

    temp.next = newAd;
    newAd.next = this.head; 
  }

  //Remove an Ad by name (first occurrence)
  removeAd(adName) {
    if (!this.head) {
      console.log("No ads to remove!");
      return;
    }

    let current = this.head;
    let prev = null;

    // Case 1: Only one ad
    if (current.next === this.head && current.adName === adName) {
      this.head = null;
      return;
    }

    // Case 2: Removing the head ad
    if (this.head.adName === adName) {
      // Find last ad
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = this.head.next;
      this.head = this.head.next;
      return;
    }

    // Case 3: Removing any other ad
    prev = this.head;
    current = this.head.next;
    while (current !== this.head) {
      if (current.adName === adName) {
        prev.next = current.next;
        return;
      }
      prev = current;
      current = current.next;
    }

    console.log(`${adName} not found in the carousel.`);
  }

  //Show all Ads in rotation order
  showAds() {
    if (!this.head) {
      console.log("No ads available!");
      return;
    }

    let result = [];
    let temp = this.head;
    do {
      result.push(temp.adName);
      temp = temp.next;
    } while (temp !== this.head);

    console.log(result.join(" -> "));
  }

  //Rotate and show current ad
  rotateAndShow(k) {
    if (!this.head) {
      console.log("No ads available to rotate!");
      return;
    }

    let current = this.head;
    for (let i = 0; i < k; i++) {
      current = current.next;
    }

    console.log(`Current Ad: ${current.adName}`);
  }
}

//Example Usage
const carousel = new CarouselAdSystem();

carousel.addAd("Nike");
carousel.addAd("Adidas");
carousel.addAd("Puma");
carousel.addAd("Reebok");

carousel.showAds();        // Nike -> Adidas -> Puma -> Reebok
carousel.rotateAndShow(5); // Current Ad: Adidas

carousel.removeAd("Puma");
carousel.showAds();        // Nike -> Adidas -> Reebok
carousel.rotateAndShow(2); // Current Ad: Reebok