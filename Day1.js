//Day1 of 100days challenge

//Remove Discontinued products
let products=["Laptop","Mobile","Tablet","Camera","Watch"];
products.splice(2,2);
console.log("discontinued products:-",products);

//Add New Students in between
let students=["Ali","Sara","Zoya"];
students.splice(1,0,"Naina","Omar");
console.log("New Students:-",students);

//Extract top performers
let scores=["Zainab","Ali","Farhan","Nida","Ayaan"];
let topperformers=scores.slice(0,3);
console.log("Top performers are:-",topperformers);

//Show last 2 days sales
let sales=[220,300,280,150,400,390,310];
let days=sales.slice(-2);
console.log("last 2 days sales:-",days);

//Get all users who are active
let users=[
    {name:"Ahmed",active:true},
    {name:"Mira",active:false},
    {name:"john",active:true},
];
const activeUsers=users.filter(function(user){
    return user.active;
});
console.log("Active Users:-",activeUsers);

//block short phone numbers
let phoneNumbers=["1234567890","12345","9876543210","678901234"];
let crctNumbers=phoneNumbers.filter(function(num){
    if(num.length===10){
        return num;
    }
});
 console.log("Correct Numbers are:-",crctNumbers);

 //Convert price to With tax
 let prices=[100,200,300];
 function GST(price){
    return price*1.18;
 }
 let tax=prices.map(GST);
 console.log("Price With Tax:-",tax);

 //Append ".com" to website names
 let sites=["Google","Amazon","Microsot"];
 function names(site){
    return site+".com";
 }
 let spot=sites.map(names);
 console.log("Website name with .com:-",spot);

 //calculate total Cart price
 let cart=[499,1299,299,799];
 let totalsum=cart.reduce(function(acc,curr){
     acc=acc+curr;
     return acc;
 },0);
 console.log("Total cart price =",totalsum);

 //count Frequency of Votes
let votes=["A","B","A","C","B","A"];
let count=votes.reduce(function(acc,vote){
    acc[vote]=(acc[vote]||0)+1;
    return acc;
},{});
console.log("Frequency of Votes =",count);














