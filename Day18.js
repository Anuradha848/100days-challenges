//Day18 of 100days challenge
//Longest subarray withsum <= k
function longestSubarray(nums,k){
    let start=0;
    let sum=0;
    let maxLen=0;
    for(let end=0;end<nums.length;end++){
        sum+=nums[end];
        while(sum>k&&start<=end){
            sum-=nums[start];
            start++;
        }
        maxLen=Math.max(maxLen,end-start+1)
    }
    return maxLen;
}
console.log(longestSubarray([4,2,1,7,8,1,2,8,1],8));