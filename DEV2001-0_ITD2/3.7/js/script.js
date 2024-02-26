//

//* --------------- CLASS ----------------------
console.log("-----   Question #4  CLASS  -----");
//
class Chevy {
    constructor(carName, hp) {
        this.carName = carName;
        this.hp = hp;
    }

    startUp() {
        return `The ${this.carName} purrs to life with a roar of ${this.hp}hp`;
    }

    holeShot() {
        return `The ${this.carName} spins the tires utilizing the ${this.hp}hp`;
    }
}

(() => {
    // …

    //* -------------------------------------
    console.log("-----   Question #1   -----");
    let myArray = ["apple", "banana", 42, "orange", 7];

    for (let i = 0; i < myArray.length; i++) {
        //
        console.log(myArray[i]);
    }

    //* -------------------------------------
    console.log("-----   Question #2   -----");

    let myName = "Jordan F";
    let favFood = "Mint Chocolate Chip";

    let stuff = [];

    stuff.push(myName);
    stuff.push(favFood);

    for (let i = 0; i < stuff.length; i++) {
        //
        console.log(stuff[i]);
    }

    //* -------------------------------------
    console.log("-----   Question #3   -----");

    let secArray = ["red", 42, "apple", true, "banana"];

    secArray.forEach(function (element) {
        // Show each element in the console
        console.log(element);
    });

    //* -------------------------------------
    console.log("-----   Question #4   -----");

    let favChevy = new Chevy("Nova", "382");

    // Show the properties in the console
    console.log("carName:", favChevy.carName);
    console.log("Hp:", favChevy.hp);

    // favChevy.startUp();
    // favChevy.holeShot();

    console.log(favChevy.startUp());
    console.log(favChevy.holeShot());

    //* -------------------------------------
    console.log("-----   Question #5   -----");

    let testArray = [1, 2, 5, 6, 3, 10, 12, 16];
    const results = [];

    const getEvenNumbers = (array) => {
        //s Even Numbers
        array.forEach((number) => {
            if (number % 2 === 0) {
                results.push(number);
            }
        });

        return results;
    };

    let evenNumbers = getEvenNumbers(testArray);
    console.log(evenNumbers);
})();
