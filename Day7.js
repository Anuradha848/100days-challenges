//Insert New Delivery Order
function insertOrder(order,neworder){
    let index=order.length;
    for(let i=0;i<order.length;i++){
        if(neworder.deliveryTime<order[i].deliveryTime){
            let index=i;
            break
        }
    }  
    order.splice(index,0,neworder);
    return order;
}
const order=[
    {orderId:1,deliveryTime:"12:00"},
    {orderId:2,deliveryTime:"12:30"}
];
const neworder={orderId:3,deliveryTime:"12:15"};
console.log("Array after inserted new order:-",insertOrder(order,neworder));

//Remove Inactive Users
function removeInactive(users) {
    return users.filter(user=>user.isActive);
}
const users=[
    {username:"ali",isActive:true},
    {username:"sara",isActive:false},
    {username:"john",isActive:true}
];
console.log("Active Users are:-",removeInactive(users));

//Movie Pair Watch Time
function findMoviePair(durations,targetTime){
    durations.sort((a,b)=>a-b);
    let left=0;
    let right=durations.length-1;
    while(left<right){
        const sum=durations[left]+durations[right];
        if(sum==targetTime) {
            return [durations[left],durations[right]];
        }else if(sum<targetTime){
            left++;
        }else{
            right--;
        }
    }
    return null;
}
const movieDuration=[90,85,75,60,120,150,125];
const targetTime=150;
console.log("Movie pair watch time is:-",findMoviePair(movieDuration,targetTime));