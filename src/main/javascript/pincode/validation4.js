function validatePinCode(pin) {
    let regex = /^\d{3}\s?\d{3}$/;
    return regex.test(pin);
}


console.log(validatePinCode("400088"));
console.log(validatePinCode("400 088"));