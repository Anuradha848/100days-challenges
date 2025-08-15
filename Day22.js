//Day22 of 100days challenge
//Indian Flag in the Parade challenge
function IndianFlag(colors) {
    let left = 0;
    let minLength = Infinity;
    let orangeCount = 0;
    let whiteCount = 0;
    let greenCount = 0;
    for (let right = 0; right < colors.length; right++) {
        if (colors[right] === "orange") orangeCount++;
        if (colors[right] === "white") whiteCount++;
        if (colors[right] === "green") greenCount++;
        while (orangeCount > 0 && whiteCount > 0 && greenCount > 0) {
            minLength = Math.min(minLength, right - left + 1);
            if (colors[left] === "orange") orangeCount--;
            if (colors[left] === "white") whiteCount--;
            if (colors[left] === "green") greenCount--;
            left++;
        }
    }
    return minLength === Infinity ? -1 : minLength;
}
console.log(IndianFlag(["blue", "orange", "white", "blue", "green", "orange"]));
