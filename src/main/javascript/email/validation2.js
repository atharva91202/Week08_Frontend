function validateEmail(email) {
    let regex = /^abc(\.\w+)?@bridgelabz\.\w+$/;
    return regex.test(email);
}


console.log(validateEmail("abc@bridgelabz.co"));
console.log(validateEmail("abc.xyz@bridgelabz.co"));
console.log(validateEmail("abc@bridgelabz.com"));