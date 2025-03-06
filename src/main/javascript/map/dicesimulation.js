function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Generate number between 1-6
}

let dieRolls = new Map();
let maxCount = 10;

// Initialize map with counts for each die face
for (let i = 1; i <= 6; i++) {
    dieRolls.set(i, 0);
}

// Roll die until any number reaches 10 times
let reachedMax = false;
while (!reachedMax) {
    let roll = rollDie();
    dieRolls.set(roll, dieRolls.get(roll) + 1);

    if (dieRolls.get(roll) === maxCount) {
        reachedMax = true;
    }
}

// Find max and min occurrences
let maxNumber = [...dieRolls.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
let minNumber = [...dieRolls.entries()].reduce((a, b) => (a[1] < b[1] ? a : b))[0];

console.log("Die roll results:", Object.fromEntries(dieRolls));
console.log("Number that reached maximum times:", maxNumber);
console.log("Number that appeared minimum times:", minNumber);