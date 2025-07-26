//Day2 0f 100days challenge

//Generate invoice report
let items=[
    {name:"pen",qty:3,price:10},
    {name:"Notebook",qty:2,price:50},
    {name:"Bag",qty:1,price:400}
];
//using map method
let report=items.map(({name,qty,price})=>{
  return {
    name,
    total: qty*price 
  };
});
console.log(report);

//using reduce method
let report1=items.reduce((acc,{name,qty,price})=>{
    acc.push({
        name:name,
        total:qty*price,
    });
    return acc;
},[]);
console.log(report1);

//Find most solid product
let orders=[
    {product:"pen",qty:10},
    {product:"Notebook",qty:5},
    {product:"pen",qty:15},
    {product:"Bag",qty:1},
    {product:"Notebook",qty:10}
];
let frequency=orders.reduce((acc,item)=>{
    acc[item.product]=(acc[item.product]||0)+item.qty;
    return acc;
},{});
let sold=Object.keys(frequency).reduce((maxproduct,current)=>
    frequency[current]>frequency[maxproduct]? current:maxproduct
);
console.log("The most sold product is:-",sold);

//Delete duplicate entries
let users=["Ali","Sara","Zoya","Ali","Zara","Sara"];
let duplicates=users.filter((name,index,arr)=>
    arr.indexOf(name)!==index
);
let crctusers=[...new Set(duplicates)];
console.log(crctusers);