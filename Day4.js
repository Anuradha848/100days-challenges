//Day4 of 100days of challenge

//Adding the prefix "INV"- to each number

let invoices=[1001,1002,1003,1004];
 
let changedinvoice=invoices.map(num=>"INV-" +num);
console.log(changedinvoice);

let changedinvoice1=invoices.map(num=>`INV- ${num}`);
console.log(changedinvoice1);
