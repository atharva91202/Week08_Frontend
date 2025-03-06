let start = parseInt(process.argv[2]); // Start of range
let end = parseInt(process.argv[3]);   // End of range

console.log(`Prime numbers between ${start} and ${end}:`);
for (let num = start; num <= end; num++) {
    let isPrime = true;
    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) console.log(num);
}