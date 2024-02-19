//
//

console.log("-------- Question #1 ----------");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("-------- Question #2 ----------");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("-------- Question #3 ----------");

for (let i = 10; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("-------- Question #4 ----------");
let score = 0;

for (let i = 0; i < 20; i++) {
    console.log("I:", i);
    score += 10;
}

console.log("Final score:", score);

console.log("-------- Question #5 ----------");
let rollCount = 0;

while (true) {
    // Simulate rolling a six-sided die (generating a random number from 1 to 6)
    const currentRoll = Math.floor(Math.random() * 6) + 1;

    // Increment the roll count
    rollCount++;

    // Display the result of each roll
    console.log(`Roll #${rollCount}: Rolled a ${currentRoll}`);

    // Check if the current roll is 3
    if (currentRoll === 3) {
        console.log(`It took ${rollCount} attempts to roll a 3.`);
        break; // Exit the loop once a 3 is rolled
    }
}
