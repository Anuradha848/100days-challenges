//Day10 of 100days of challenge
//Merge Inetrvals
function mergeSlots(userA, userB) {
    let Intervals = userA.concat(userB);
    Intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    for (let i = 0; i < Intervals.length; i++) {
        let current = Intervals[i];
        if (result.length === 0 || result[result.length - 1][1] < current[0]) {
            result.push(current);
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], current[1]);
        }
    }
    return result;
}
const userA=[[9,11],[13,15],[18,20]];
const userB=[[10,12],[14,16],[17,18]];
console.log(mergeSlots(userA,userB));

