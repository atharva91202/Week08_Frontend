
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

console.log("a + b * c =", op1);
console.log("a % b + c =", op2);
console.log("c + a / b =", op3);
console.log("a * b + c =", op4);

let max, min;

// Finding maximum
if (op1 >= op2 && op1 >= op3 && op1 >= op4) {
    max = op1;
} else if (op2 >= op1 && op2 >= op3 && op2 >= op4) {
    max = op2;
} else if (op3 >= op1 && op3 >= op2 && op3 >= op4) {
    max = op3;
} else {
    max = op4;
}

// Finding minimum
if (op1 <= op2 && op1 <= op3 && op1 <= op4) {
    min = op1;
} else if (op2 <= op1 && op2 <= op3 && op2 <= op4) {
    min = op2;
} else if (op3 <= op1 && op3 <= op2 && op3 <= op4) {
    min = op3;
} else {
    min = op4;
}

console.log("Maximum Value:", max);
console.log("Minimum Value:", min);
