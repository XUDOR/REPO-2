/*
Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.
Math.random., 
a number, 
and rolls that many 
six-sided dice.
/// Math.random. * 6

*/

const numberOfDice = parseInt(process.argv[2], 10); // NODE.js > command line prompt

if (isNaN(numberOfDice) || numberOfDice <= 0) {
    console.error('Please provide a valid positive number for dice rolls.'); // error
    process.exit(1);
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // dice roll: 6 sided die
}

const results = [];
for (let i = 0; i < numberOfDice; i++) { // loops dice rolls according to command line arguemnt
    results.push(rollDice());
}

console.log(`Rolled ${numberOfDice} dice:`, results.join(', ')); // string output

