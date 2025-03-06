function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1; // Generate month between 1-12
}

let birthMonths = new Map();

// Assign birth months to 50 individuals
for (let i = 1; i <= 50; i++) {
    let month = getRandomMonth();
    if (!birthMonths.has(month)) {
        birthMonths.set(month, []);
    }
    birthMonths.get(month).push(i); // Store individual number
}

// Print individuals with the same birth month
console.log("Individuals grouped by birth month:");
for (let [month, individuals] of birthMonths) {
    console.log(`Month ${month}:`, individuals);
}