const itemName = "soccer boots";
let itemPrice = 100;
let quantity = 5;
const tax = 0.3;

let subtotal = itemPrice * quantity;
let taxAmount = subtotal * tax;
let finalTotal = subtotal + taxAmount;

console.log(itemName);
console.log(itemPrice);
console.log(quantity);
console.log(tax);

console.log(subtotal);
console.log(taxAmount);
console.log(finalTotal);

console.log(`i am buying ${quantity} ${itemName}. My final total including tax rate is ${finalTotal}`);
