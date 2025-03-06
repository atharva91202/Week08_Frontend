function validatePinCode(pin) {
    let regex = /^[0-9]\d{5}$/;
    return regex.test(pin);
}


console.log(validatePinCode("400088"));
console.log(validatePinCode("A400088"));