//Day20 of 100days challenge
//Classic fixed-size sliiding window problem
function minVisitorsInKHours(visitors, k) {
    if (visitors.length < k) return null; 
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += visitors[i];
    }
    let minSum = windowSum;
    for (let end = k; end < visitors.length; end++) {
        windowSum += visitors[end] - visitors[end - k];
        minSum = Math.min(minSum, windowSum);
    }
    return minSum;
}
console.log(minVisitorsInKHours([120, 80, 100, 90, 150, 110, 70],3));