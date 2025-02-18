// utils.js

// First Function: Prints a welcome message
export function welcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Second Function: Converts Celsius to Fahrenheit
export function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Third Function: Calculates the factorial of a number
export function calculateFactorial(num) {
    if (num <= 1) return 1;
    return num * calculateFactorial(num - 1);
}

// Fourth Function: Advanced - Checks if a number is prime
export function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}
