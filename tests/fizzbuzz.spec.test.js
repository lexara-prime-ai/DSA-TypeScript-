// Import the function to be tested
const fizzBuzz = require('./fizzBuzz'); // Assuming fizzBuzz.js is the file containing the implementation

// Test suite
describe('FizzBuzz', () => {
    // Test case 1: 3 should return "Fizz"
    test('should return "Fizz" when the input is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(9)).toBe('Fizz');
        expect(fizzBuzz(12)).toBe('Fizz');
    });

    // Test case 2: 5 should return "Buzz"
    test('should return "Buzz" when the input is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
    });

    // Test case 3: 15 should return "FizzBuzz"
    test('should return "FizzBuzz" when the input is divisible by both 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(45)).toBe('FizzBuzz');
    });

    // Test case 4: Other numbers should return the input itself
    test('should return the input number as a string for other cases', () => {
        expect(fizzBuzz(1)).toBe('1');
        expect(fizzBuzz(7)).toBe('7');
        expect(fizzBuzz(19)).toBe('19');
    });
});


///////////////////////
///// DESCRIPTION /////
///////////////////////

// The first test case checks if the function returns "Fizz" when the input is divisible by 3.

// The second test case checks if the function returns "Buzz" when the input is divisible by 5.

// The third test case checks if the function returns "FizzBuzz" when the input is divisible by both 3 and 5.

// The fourth test case checks if the function returns the input number itself as a string for other cases.