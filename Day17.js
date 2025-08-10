//Day17 of 100days challenge
//Brute-force: Find the longest subarray with sum ≤ k.
function longestSubarrayAtMostK(nums, k) {
  const n = nums.length;
  let maxLen = 0;
  for (let start = 0; start < n; start++) {
    let sum = 0;
    for (let end = start; end < n; end++) {
      sum += nums[end];
      if (sum <= k) {
        const currentLen = end - start + 1;
        if (currentLen > maxLen) {
          maxLen = currentLen;
        }
      }
    }
  }
  return maxLen;
}
console.log(longestSubarrayAtMostK([2, 1, 5, 1, 3, 2],8));
