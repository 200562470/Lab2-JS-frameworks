// index.js

// Importing functions from utils.js
import { welcomeMessage, convertCelsiusToFahrenheit, calculateFactorial, isPrime } from './utils.js';

// Using the functions
welcomeMessage("Jashan", "Harsh");

const tempCelsius = 25;
console.log(`${tempCelsius}°C is ${convertCelsiusToFahrenheit(tempCelsius)}°F`);

const number = 5;
console.log(`Factorial of ${number} is ${calculateFactorial(number)}`);

const primeCheck = 5;
console.log(`${primeCheck} is prime: ${isPrime(primeCheck)}`);
