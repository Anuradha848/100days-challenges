//Day8 of 100days challenge
//Count Pairs with Given sum
function sumofTwo(arr,target){
    left=0;
    right=arr.length-1;
    count=0;
    while(left<right){
        let currentsum=arr[left]+arr[right];
        if(currentsum==target){
            count+=1;
            left+=1;
            right-=1;
        }else if(currentsum<target){
            left++;
        }else{
            right--;
        }
    }
    return count;
}
console.log("Count of pairs:-",sumofTwo([1,2,3,4,5,6,7],8));

//Move Zeros to end
function movrZeros(arr){
    let nonzero=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[nonzero]=arr[i];
            nonzero++;
        }
     }
        for(let i=nonzero;i<arr.length;i++){
            arr[i]=0;
        }
        return arr;
}
console.log("Array with Zeros at the end:-",movrZeros([0,1,0,3,12]));
