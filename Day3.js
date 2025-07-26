//Day3 of 100days challenge

//Delete and merge Duplicate Product Entries
let inventory=[
    {id:101,name:"Laptop"},
    {id:102,name:"Mobile"},
    {id:103,name:"laptop"},
    {id:104,name:"Tablet"},
    {id:105,name:"MOBILE"},
    {id:106,name:"Camera"}
];
let original=[];
let cleanedInventory=inventory.filter(item=>{
    let nameLower=item.name.toLocaleLowerCase();
    if(original.includes(nameLower)){
        return false;
    }
    original.push(nameLower);
    return true;
});
console.log(cleanedInventory);

//using map and filter
let namesLower=inventory.map(item=>item.name.toLowerCase());
let cleanedInventory1=inventory.filter((item,index)=>
    namesLower.indexOf(item.name.toLowerCase())===index
);
console.log(cleanedInventory1);

//Group transactions by category and sum amounts
let transactions=[
    {category:"Food",amount:120},
    {category:"Transport",amount:50},
    {category:"Food",amount:80},
    {category:"Shopping",amount:300},
    {category:"Transport",amount:70}
];
let sum=transactions.reduce((acc,curr)=>{
    acc[curr.category]=(acc[curr.category]||0)+curr.amount;
    return acc;
},{});
console.log(sum);