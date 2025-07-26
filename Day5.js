//Day5 of 100days of challenge

//Separate Phone numbers
 const phoneNumbers=[
    "+919876543210",
    "+14085551234",
    "+918888777666",
    "+12345678901",
    "+917654321098"
 ];
 const indiaNumbers=phoneNumbers.filter(num=>
    num.startsWith("+91"));
 const USNumbers=phoneNumbers.filter(num=>
    num.startsWith("+1")&&!num.startsWith("+91"));
 const result={
    indiaNumbers,
    USNumbers
 };
 console.log(result);

//insert product in cart

let cart=[101,102,104];
let newProduct=103;

cart.splice(1,0,newProduct);
console.log(cart);

//insert student in waiting list

let waitingList=["Ali","John","Sara"];
let newStudent="Aarav";

waitingList.push(newStudent);
console.log(waitingList);