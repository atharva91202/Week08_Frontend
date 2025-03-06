function validateEmail(email) {
    let regex = /^abc([_+-.]\w+)?@bridgelabz\.co(\.\w+)?$/;
    return regex.test(email);
}


console.log(validateEmail("abc@bridgelabz.co"));
console.log(validateEmail("abc.xyz@bridgelabz.co"));
console.log(validateEmail("abc-xyz@bridgelabz.co"));