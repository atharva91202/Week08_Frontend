let year = parseInt(process.argv[2]); // command line input for year

if (year >= 1000 && year <= 9999) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(year + " is a Leap Year");
            } else {
                console.log(year + " is not a Leap Year");
            }
        } else {
            console.log(year + " is a Leap Year");
        }
    } else {
        console.log(year + " is not a Leap Year");
    }
} else {
    console.log("Please enter a valid 4-digit year");
}