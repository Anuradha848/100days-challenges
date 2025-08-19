//Day23 of 100days challenge
//Minimum Window of Required Ingredients
function findDelivers(arr) {
    let minLength = Infinity;
    let left = 0;
    let tomatoCount = 0, cheeseCount = 0, onionCount = 0;
    for (let right = 0; right < arr.length; right++) {
        if (arr[right] === "tomato") tomatoCount++;
        if (arr[right] === "cheese") cheeseCount++;
        if (arr[right] === "onion") onionCount++;
        while (tomatoCount > 0 && cheeseCount > 0 && onionCount > 0) {
            minLength = Math.min(minLength, right - left + 1);
            if (arr[left] === "tomato") tomatoCount--;
            if (arr[left] === "cheese") cheeseCount--;
            if (arr[left] === "onion") onionCount--;
            left++;
        }
    }
    return minLength === Infinity ? -1 : minLength;
}
console.log(findDelivers(["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"])); 
