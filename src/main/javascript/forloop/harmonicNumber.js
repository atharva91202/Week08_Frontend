let n = parseInt(process.argv[2]); // Command-line input
let harmonicNumber = 0;

for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
}

console.log(`Harmonic Number H(${n}) = ${harmonicNumber}`);