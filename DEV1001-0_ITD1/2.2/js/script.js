/*
Fortin, Jordan
1 / 20 / N
Lets's Go Shopping!
*/

alert("Let's make a receipt! Click ok to start");

//!  Item's
//* Item #1
let item_1 = prompt("What is the name of your first item to calculate? ");
let item_1_cost = parseFloat(
    prompt("What is the cost of " + item_1 + " each?")
);
let item_1_quantity = parseInt(
    prompt("How many " + item_1 + "'s did you get?")
);

alert("Second Item's stats: Click ok to proceed!");

//* Item #2
let item_2 = prompt("What is the name of your second item to calculate? ");
let item_2_cost = parseFloat(
    prompt("What is the cost of " + item_2 + " each?")
);
let item_2_quantity = parseInt(
    prompt("How many " + item_2 + "'s did you get?")
);

//* Item's Total
let item_1_total = parseFloat(item_1_cost * item_1_quantity);
let item_2_total = parseFloat(item_2_cost * item_2_quantity);

//* Items's Sub Total
let itemsSubTotal = parseFloat(item_1_total + item_2_total);

//! Tax
//* Item's Tax
let taxRate = parseFloat(
    prompt("What is the sales Tax percent in your state? ")
);
// let tax = parseFloat( itemsSubTotal * taxRate );

let tax = parseFloat(taxRate / 100) * itemsSubTotal;

//* Grand Total
// let grandTotal = parseFloat(itemsSubTotal + tax);

let grandTotal = parseFloat(tax + itemsSubTotal);

//! Logs
//* Item #1 Log
console.log("Log Item #1: ");
console.log(item_1, item_1_cost, item_1_quantity + " $" + item_1_total);
console.log("------------------------------------------------");

//* Item #2 Log
console.log("Log Item #2: ");
console.log(item_2, item_2_cost, item_2_quantity + " $" + item_2_total);
console.log("------------------------------------------------");

//* Tax rate
console.log("Tax Charged: " + taxRate + " $" + tax);
console.log("------------------------------------------------");

//* Item's Grand Total's
console.log("Total's: $" + itemsSubTotal + " $" + grandTotal);
console.log("------------------------------------------------");

//* Console Receipt
console.log("---------------  Console Receipt   -------------------");
console.log(
    "Item #1: (" +
        item_1_quantity +
        ") " +
        item_1 +
        "'s @ $" +
        item_1_cost +
        "= $" +
        item_1_total
);
console.log(
    "Item #2: (" +
        item_2_quantity +
        ") " +
        item_2 +
        "'s @ $" +
        item_2_cost +
        "= $" +
        item_2_total
);

console.log("Item's subTotal before Tax: = $" + itemsSubTotal);
console.log(taxRate + "% Sales Tax: = $" + tax);
console.log("Grand Total: = $" + grandTotal);

//* Alert Receipt
console.log("---------------  Alert Receipt   -------------------");

console.log(`(${item_1_quantity}) ${item_1}(s) @ $${item_1_cost} = $${item_1_total}
(${item_2_quantity}) ${item_2}(s) @ $${item_2_cost} = $${item_2_total}
SubTotal before tax = $${itemsSubTotal}
${taxRate}% Sales Tax = $${tax}
Grand Total = $${grandTotal}
`);

alert(`(${item_1_quantity}) ${item_1}(s) @ $${item_1_cost} = $${item_1_total}
(${item_2_quantity}) ${item_2}(s) @ $${item_2_cost} = $${item_2_total}
SubTotal before tax = $${itemsSubTotal}
${taxRate}% Sales Tax = $${tax}
Grand Total = $${grandTotal}
`);
