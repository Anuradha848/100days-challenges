//Day21 of 100days challege
//Longest Productive Streak
function longestProductive(days, k) {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;
    for (let right = 0; right < days.length; right++) {
        if (days[right] === 0) {
            zeroCount++;
        }
        while (zeroCount > k) {
            if (days[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
console.log(longestProductive([1, 0, 1, 1, 0, 0, 1, 1, 1, 0],2)); 
