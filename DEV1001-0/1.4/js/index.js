/*
Jordan Fortin
January 10, 2024.
1.4 Story Time
*/

//* Intro alert Message
alert(
    "If you answer 6 question I will tell you a story! You can check the console to see the answer or on the page."
);

//* Variables (name, color,number, favMovie, animal & adjective)
let name = prompt("What is your name? ");

let color = prompt("Pick a color? ");

let number = prompt("Pick a number? ");

let favoriteMovie = prompt("what is your favorite movie? ");

let animal = prompt("what type of animal do you like? ");

let adjective = prompt("Lastly pick an adjective? ");

//*  Log Concatenation
console.log(
    "Log Greeting #1:" +
        " Hi my name is " +
        name +
        " and my favorite color is " +
        color +
        ". " +
        " If I had to pick a number it would be " +
        number +
        ". " +
        "My all time favorite movie is " +
        favoriteMovie +
        " and I love " +
        animal +
        " as a pet, " +
        "specially when they are " +
        adjective +
        "."
);

//* Template Literal Greeting
let greeting = `Hi my name is ${name} and my favorite color is ${color}. If I had to pick a number it would be ${number}. My all time favorite movie is ${favoriteMovie} and I love ${animal} as a pet, specially when they are ${adjective}.`;

//* Log
console.log("Log Greeting (Template Literal) #2:", greeting);

//* Display Greeting on Page
let showGreet = document.getElementById("returnInfo");
showGreet.textContent = greeting;
