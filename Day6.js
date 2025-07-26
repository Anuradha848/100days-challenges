//Day6 of 100days challenge

//Add product to cart

let cart=[101,102,103,104];
let newProduct=105;

cart.push(newProduct);
console.log(cart);

//Remove Sold out items

let cart1=[101,102,103,104];

let index=cart1.indexOf(103);
if(index!==-1){
    cart1.splice(index,1);
}
console.log(cart1);

//insert a Specific position

let fruits=["apple","orange","grapes"];

fruits.splice(index,0,"banana");
console.log(fruits);

//print All students

let students=["Ali","Zara","John"];

students.forEach((name)=>{
    console.log(`Hello, ${name}!`);
});

//Delete First Item from Queue

let orders=["order1","order2","order3"];
orders.shift();
console.log(orders);


