//Day24 of 100days challenge
//Longest Substring Without Repeating Characters 
function longestSubstring(string){
    window=new Set();
    left=0;
    maxlength=0;
    for(let right=0;right<string.length;right++){
        while(window.has(string[right])){
           window.delete(string[left]);
            left++;
        }
        window.add(string[right]);
        maxlength=Math.max(maxlength,right-left+1);
    }
    return maxlength;
}
console.log(longestSubstring("abcabcbb"));