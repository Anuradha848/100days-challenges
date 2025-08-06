// Day 14 of 100DaysOfDSA
// Sliding Window - Brute-force Approach ❌ No Optimization
function minVisitors(visitors, k) {
    let minSum = Infinity;
    for (let i = 0; i <= visitors.length - k; i++) {
        let currentSum = 0;
        for (let j = i; j < i + k; j++) {
            currentSum += visitors[j];
        }
        minSum = Math.min(minSum, currentSum);
    }
    return minSum;
}
console.log(minVisitors([120, 80, 100, 90, 150, 110, 70], 3)); 
