/*
Fortin, Jordan
1/26/24
3.4 Query-Selector
*/

//t ---  Problem #1  ---
//! Intro
let name = prompt(
    "Hello, I will be here to help guide you through the process. What is your name? "
);

//! Name Check
if (name.length > 0) {
    alert(
        `Hello ${name}, Welcome to the Discount Double Check, You will be prompted for the price of two items & depending on the total amount it will say if a discount was applied and how much!`
    );
} else {
    alert(
        "You did not enter a name greater than 1 character, Enter a name & Try Again! Cancel will abort Action!"
    );
    location.reload();
}

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
    // 10%
    let discount_10 = (10 / 100) * itemsTotal;
    let discountedRate = itemsTotal - discount_10;
    let discountMessage = `${name},Your total purchase is $${discountedRate.toFixed(
        2
    )}, which includes your 10% discount.`;

    document.querySelector("#return_1").innerText = discountMessage;
    document.querySelector("#return_1").style.backgroundColor = "green";
    document.querySelector("#return_1").style.color = "white";

    //s Logs
    // console.log("--- 10% discount ---");
    // console.log(discount_10, discountedRate, discountMessage);
} else if (itemsTotal >= 50 && itemsTotal < 100) {
    // 5%
    let discount_5 = (5 / 100) * itemsTotal;
    let discountedRate = itemsTotal - discount_5;
    let discountMessage = `${name},Your total purchase is $${discountedRate.toFixed(
        2
    )}, which includes your 5% discount.`;

    document.querySelector("#return_1").innerText = discountMessage;
    document.querySelector("#return_1").style.backgroundColor = "green";
    document.querySelector("#return_1").style.color = "white";

    //s Logs
    // console.log("5% discount");
    // console.log(discount_5, discountedRate, discountMessage);
} else if (itemsTotal < 50) {
    // 0%
    let message = `${name}, Your total purchase is $${itemsTotal.toFixed(2)}.`;

    document.querySelector("#return_1").innerText = message;
    document.querySelector("#return_1").style.backgroundColor = "yellow";
    document.querySelector("#return_1").style.color = "black";

    //s Logs
    // console.log("0% discount");
    // console.log(message);
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

//t ---  Problem #2  ---

//! Intro
alert(
    `Welcome ${name} to The Last Gas Station for Miles, answer 3 questions to determine how many miles until your tank is empty`
);

let tankCapacity = parseInt(prompt("How much gas does your vehicle hold?", 20));
let gasLevel = parseInt(prompt("How much gas do you currently have now?", 50));
let MPG = parseInt(
    prompt("How many miles per a gallon does your vehicle get?", 25)
);

let milesToRefuel = (gasLevel / 100) * tankCapacity * MPG;

if (milesToRefuel >= 200) {
    let message = `Yes, you can drive ${milesToRefuel} miles and you can make it without stopping for gas!`;

    document.querySelector("#picOpt").style.visibility = "visible";
    document.querySelector("#return_2").innerText = message;

    //s Log
    // console.log("can make it");
    // console.log(message);
} else if (milesToRefuel < 200) {
    let message = `You can only drive ${milesToRefuel} miles more, better get gas now while you can!`;

    document.querySelector("#picOpt").getAttribute;
    document.querySelector("#picOpt").style.visibility = "visible";
    document.querySelector("#picOpt").src = "img/notEnoughGas.jpg";
    document.querySelector("#return_2").innerText = message;

    //s Log
    // console.log("can NOT make it");
    // console.log(message);
} else {
    console.log("error");
}

//! Logs
console.log("--------   LOGS   ---------");
console.log(tankCapacity, gasLevel, MPG);
console.log(milesToRefuel);
