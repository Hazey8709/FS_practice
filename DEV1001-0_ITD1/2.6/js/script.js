/*
Fortin, Jordan.
11/21/24
Conditionals
Grade Letter Calculator
Pumpkin Patch Pickers
Loyalty Card
*/

//! Grade Calculator Stats
// A is 90-100
// B is 80-89
// C is 70-79
// D is 60-69
// F is 0-59
// Error - If the user types in something above 100 or less than zero give them an error message.

console.log("-------  Letter Grade Calculator  -------- ");
//* alerts
alert(
    "Welcome to The grade Calculator, You will be asked for a number grade and it will tell you your Letter grade. To check results Check console/ Browser Console. Click OK to proceed!"
);

alert(
    "To calculate your letter grade, Enter the grade number when prompted! It excepts a number/decimal from 0 to 100/ 0.0 to 100.0. click Ok to proceed!"
);

//* Number Grade
let numGrade = parseFloat(
    prompt("What is the number grade you would like a letter grade for?")
);

// //* Log Number GradeBefore
// console.log("Number Grade: ", numGrade);

//* Else If
if (
    (numGrade >= 90 && numGrade <= 100) ||
    (numGrade >= 90.0 && numGrade <= 100.0)
) {
    //s Letter A
    console.log(
        "You have a(n)" +
            numGrade +
            "%, which means you have earned a(n) A in the class!"
    );
    alert("Your grade is a A.");
} else if (
    (numGrade >= 80 && numGrade <= 89) ||
    (numGrade >= 80.0 && numGrade <= 89.99)
) {
    //s Letter B
    console.log(
        "You have a(n)" +
            numGrade +
            "%, which means you have earned a(n) B in the class!"
    );
    alert("Your grade is a B.");
} else if (
    (numGrade >= 70 && numGrade <= 79) ||
    (numGrade >= 70.0 && numGrade <= 79.99)
) {
    //s Letter C
    console.log(
        "You have a(n)" +
            numGrade +
            "%, which means you have earned a(n) C in the class!"
    );
    alert("Your grade is a C.");
} else if (
    (numGrade >= 60 && numGrade <= 69) ||
    (numGrade >= 60.0 && numGrade <= 69.99)
) {
    //s Letter D
    console.log(
        "You have a(n)" +
            numGrade +
            "%, which means you have earned a(n) D in the class!"
    );
    alert("Your grade is a D.");
} else if (
    (numGrade >= 0 && numGrade <= 59) ||
    (numGrade >= 0.0 && numGrade <= 59.99)
) {
    //s Letter F
    console.log(
        "You have a(n)" +
            numGrade +
            "%, which means you have earned a(n) F in the class!"
    );
    alert("Your grade is a F.");
} else {
    alert(
        "ALERT: Please enter a number from 0 to 100. Hit cancel and refresh to start over!"
    );
}

//* Log
// console.log("Letter Grade: ", numGrade);

//! Pumpkin Patch Stats
// Pumpkin Weight	              Cost Per Pound

// Up To Not Including 5.5lbs   $1.00 per lbs.
// Up To Not Including 10.75lbs $0.90 per lbs.
// Up To Not Including 25lbs    $0.80 per lbs.
// Up To Not Including 50lbs    $0.70 per lbs.
// Up to and including 100lbs   $0.60 per lbs.
// Above 100 lbs                $0.50 per lbs

console.log("-------  Pumpkin Patch  -------- ");
//! Alerts
alert(
    "Try our Pumpkin Price Checker. Answer is displayed in console/ Browser Console. When prompted for the pumpkin weight enter an Number amount. click OK to start!"
);

alert(
    "Welcome to the Pumpkin Price Checker, Click OK to proceed to collect weight amount!"
);

// //* Pick Weight of Pumpkin
let weight = parseFloat(
    prompt("What is the weight of the pumpkin you want priced?")
);

//* Log Before
// console.log("Pumpkin weight: ", weight);

//* Else If
if (weight > 0.0 && weight < 5.5) {
    // console.log("Price: $1.00 per lbs");

    let cost = weight * 1.0;

    console.log(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $1.00 Per Pound it costs $" +
            cost +
            "."
    );

    alert(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $1.00 Per Pound it costs $" +
            cost +
            "."
    );
} else if (weight >= 5.5 && weight < 10.75) {
    // console.log("$0.90 per lbs");

    let cost = weight * 0.9;

    console.log(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $0.90 Per Pound it costs $" +
            cost +
            "."
    );

    alert(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $0.90 Per Pound it costs $" +
            cost +
            "."
    );
} else if (weight >= 10.75 && weight < 25.0) {
    // console.log("$0.80 per lbs");

    let cost = weight * 0.8;

    console.log(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $0.80 Per Pound it costs $" +
            cost +
            "."
    );

    alert(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $0.80 Per Pound it costs $" +
            cost +
            "."
    );
} else if (weight >= 25.0 && weight < 50.0) {
    // console.log("$0.70 per lbs");

    let cost = weight * 0.7;

    console.log(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $0.70 Per Pound it costs $" +
            cost +
            "."
    );

    alert(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $0.70 Per Pound it costs $" +
            cost +
            "."
    );
} else if (weight >= 50.0 && weight <= 100.0) {
    // console.log("$0.60 per lbs");

    let cost = weight * 0.6;

    console.log(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $0.60 Per Pound it costs $" +
            cost +
            "."
    );
    alert(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $0.60 Per Pound it costs $" +
            cost +
            "."
    );
} else if (weight > 100.0) {
    // console.log("$0.50 per lbs");

    let cost = weight * 0.5;

    console.log(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $0.50 Per Pound it costs $" +
            cost +
            "."
    );

    alert(
        "Your pumpkin weighs " +
            weight +
            " lbs. At $0.50 Per Pound it costs $" +
            cost +
            "."
    );
} else {
    console.log("Please retry");
    alert(
        "Please Retry:  Enter a number greater than 0! Click OK & Refresh page to restart!"
    );
}

console.log("-------  Loyalty Card  -------- ");
//* alerts
alert(
    "To check price with or without discount of 2 items. Check console for price. Click OK to proceed!"
);

alert("Next, when prompted enter price of each item. Click OK to proceed!");

//* Item Cost
let item_1_cost = parseFloat(prompt("what is the cost of the First Item?"));
let item_2_cost = parseFloat(prompt("what is the cost of the Second Item?"));

let itemsCost = item_1_cost + item_2_cost;

let discount = parseFloat(15 / 100) * itemsCost; // $11.25
let discountPrice = itemsCost - discount;

let preferredCustomer = prompt(
    "Are you a Preferred Customer? yes or no!"
).toLowerCase();

if (preferredCustomer == "yes") {
    console.log(
        "Your total purchase is $" +
            discountPrice +
            ". Which includes your 15% discount."
    );

    alert(
        "Your total purchase is $" +
            discountPrice +
            ". Which includes your 15% discount."
    );
} else if (preferredCustomer == "no") {
    console.log("Your total purchase is $" + itemsCost + ".");

    alert("Your total purchase is $" + itemsCost + ".");
} else {
    console.log(
        "You entered something other than yes or no for Preferred Customer. Try again with yes or no! Refresh page to restart."
    );
    alert(
        "You entered something other than yes or no for Preferred Customer. Try again with yes or no! Refresh page to restart."
    );
}

//* Logs
// console.log("Items Cost: ", item_1_cost, item_2_cost);
// console.log("items Total: ", itemsCost);
// console.log("Preferred Customer: ", preferredCustomer);

// console.log("discount: ", discount);
// console.log("discountPrice: ", discountPrice);
