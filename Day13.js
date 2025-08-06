//Day13 of 100days challenge
//Longest Productive Streak Challenge
function longestProductiveStreak(days, k) {
    let maxStreak = 0;
    for (let start = 0; start < days.length; start++) {
        let zeroCount = 0;
        for (let end = start; end < days.length; end++) {
            if (days[end] === 0) {
                zeroCount++;
            }
            if (zeroCount > k) {
                break;
            }
            let currentStreak = end - start + 1;
            maxStreak = Math.max(maxStreak, currentStreak);
        }
    }
    return maxStreak;
}
console.log(longestProductiveStreak([1, 0, 1, 1, 0, 0, 1, 1, 1, 0], 2));
