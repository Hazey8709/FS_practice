//!    1.4 ASSN. Fortin, Jordan. 2/9/24
//
//

//! Question #1
function greeting() {
    let message = `This is a greeting using console log.`;

    console.log("-------  Question #1  ---------");
    console.log(message);
}

greeting();

//! Question #2
function greetMe(name) {
    console.log("-------  Question #2  ---------");
    console.log(`Hi ${name}`);
}

greetMe("Jordan");

//! Question #3
function greetName() {
    let name = prompt("What is your name? ", "Jordan");
    let message = `Hi ${name}, How are you`;

    console.log("-------  Question #3  ---------");
    console.log(message);
}

greetName();

//! Question #4
function multiply(a, b) {
    let answer = a * b;

    console.log("-------  Question #4  ---------");
    console.log(answer);
}

multiply(10, 4);

//! Question #5
let num1G = 0;
let num2G = 0;
let total = 0;

function numbers() {
    function getNumbers() {
        let num1 = parseInt(prompt("Pick a number #1!", "10"));
        let num2 = parseInt(prompt("Pick a number #2!", "10"));
        num1G = num1;
        num2G = num2;
    }

    function calculateNumbers() {
        total = num1G + num2G;

        return total;
    }

    function displayNumbers() {
        console.log("-------  Question #5  ---------");
        console.log(`Answer: ${total} `);
    }

    getNumbers();
    const result = calculateNumbers();

    displayNumbers(result);
}

numbers();

//! Question #5 Second Way
let num1 = 0;
let num2 = 0;

function getNumbers() {
    num1 = parseInt(prompt("Pick a number #1!", "10"));
    num2 = parseInt(prompt("Pick a number #2!", "10"));
}

function calculateNumbers() {
    total = num1 + num2;

    return total;
}

function displayNumbers() {
    console.log("-------  Second Way:Question #5  ---------");
    console.log(total);
}

getNumbers();
calculateNumbers();
displayNumbers();
