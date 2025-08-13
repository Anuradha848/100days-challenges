//Day19 of 100days challenge
//Check if any k-sized sliding window has all unique elements
function hasUniqueWindow(pages, k) {
    let set = new Set();
    let start = 0;
    for (let end = 0; end < pages.length; end++) {
        while (set.has(pages[end])) {
            set.delete(pages[start]);
            start++;
        }
        set.add(pages[end])
        if (end - start + 1 === k) {
            return true;
        }
    }
    return false;
}
console.log(hasUniqueWindow(["home", "about", "products", "home", "cart", "checkout"],3)); 