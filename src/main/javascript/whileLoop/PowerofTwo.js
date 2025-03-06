let n = parseInt(process.argv[2]); // Command-line input
let i = 0;
let value = 1;

console.log(`Powers of 2 up to 2^${n} (Max 256):`);
while (i <= n && value <= 256) {
    console.log(`2^${i} = ${value}`);
    value *= 2;
    i++;
}