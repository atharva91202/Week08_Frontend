function validatePinCode(pin) {
    let regex = /^\d{6}$/;
    return regex.test(pin);
}


console.log(validatePinCode("400088"));
console.log(validatePinCode("400088B"));