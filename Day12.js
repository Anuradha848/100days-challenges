//Day12 of 100days challenge
//Sliding Window Begins!
//Maximum Sum of k
function maxSum(arr,k){
    let maxSum=0;
    for(let i=0;i<=arr.length-k;i++){
        let currentSum=0;
        for(let j=i;j<i+k;j++){
            currentSum+=arr[j];
        }
        maxSum=Math.max(maxSum,currentSum);
    }
    return maxSum;
}
console.log(maxSum([10,20,30,40,50,60,70],3));