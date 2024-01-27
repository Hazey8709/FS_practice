/*
Fortin, Jordan
1/26/24
3.4 Query-Selector
*/

//! Items
let item_1 = parseFloat(
    prompt("What is the price of your FIRST item? ", "45.50")
);
let item_2 = parseFloat(
    prompt("What is the price of your SECOND item? ", "75.00")
);

let itemsTotal = item_1 + item_2;

//! Condition
if (itemsTotal >= 100) {
    let discount_10 = (10 / 100) * itemsTotal;
    let discountedRate = itemsTotal - discount_10;
    let discountMessage = `Your total purchase is $${discountedRate.toFixed(
        2
    )}, which includes your 10% discount.`;

    document.querySelector("#return_1").innerText = discountMessage;
    document.querySelector("#return_1").style.backgroundColor = "green";
    document.querySelector("#return_1").style.color = "white";

    // Logs
    console.log("--- 10% discount ---");
    console.log(discount_10, discountedRate, discountMessage);
} else if (itemsTotal >= 50 && itemsTotal < 100) {
    let discount_5 = (5 / 100) * itemsTotal;
    let discountedRate = itemsTotal - discount_5;
    let discountMessage = `Your total purchase is $${discountedRate.toFixed(
        2
    )}, which includes your 5% discount.`;

    document.querySelector("#return_1").innerText = discountMessage;
    document.querySelector("#return_1").style.backgroundColor = "green";
    document.querySelector("#return_1").style.color = "white";

    // Logs
    console.log("5% discount");
    console.log(discount_5, discountedRate, discountMessage);
} else if (itemsTotal < 50) {
    // 0%
    let message = `Your total purchase is $${itemsTotal.toFixed(2)}.`;

    document.querySelector("#return_1").innerText = message;
    document.querySelector("#return_1").style.backgroundColor = "yellow";
    document.querySelector("#return_1").style.color = "black";

    // Logs
    console.log("0% discount");
    console.log(message);
} else {
    document.querySelector("#return_1").innerText = `error!`;
    document.querySelector("#return_1").style.color = "red";

    // Log
    console.log("error!");
}

//! Logs
console.log("-----------  LOGS  ------------");
console.log(`Item_1: $${item_1}`);
console.log(`Item_2: $${item_2}`);
console.log(`items Total: $${itemsTotal}`);

//! Stats
// >= $100               = 10% discount
// >= $50 < $100         = 5 %
// < $50                = No discount

//! Color
// If the user DOES get a discount make the background of the results Green.
// If the user DOES NOT get a discount make the background of the results Yellow.
