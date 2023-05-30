/////////////////////////////
///////// IMPORTS //////////
///////////////////////////
import { expect } from 'chai';
import { reverseInput } from './reverseInput'; 
// PASS IN EXPORTED FUNCTION AS A PARAMETER
describe('reverseInput', () => {
    // CHECK IF RESULT IS EQUAL TO THE REVERSED INPUT + POSITIVE NUMBERS
    it('should reverse a positive number', () => {
        expect(reverseInput(12345)).to.equal(54321);
    });
    // CHECK IF RESULT IS EQUAL TO THE REVERSED INPUT - NEGATIVE NUMBERS
    it('should reverse a negative number', () => {
        expect(reverseInput(-9876)).to.equal(-6789);
    });
    // CASE WHERE IPUT IS EQUAL TO 0
    it('should reverse zero', () => {
        expect(reverseInput(0)).to.equal(0);
    });
});

// ////////////////////////////////////
// /////////// DESCRIPTION ///////////
// ////////////////////////////////////

// // In this example, we use the describe function to group the test cases for 
// // the reverseInput function. Each test case is defined using the it function, 
// // which describes the expected behavior.

// // The first test case checks if the reverseInput function correctly reverses a 
// // positive number (12345) and expects the result to be 54321.

// // The second test case checks if the function handles negative numbers correctly by 
// // reversing -9876 and expecting the result to be -6789.

// // The third test case verifies if the function correctly handles the input of 0 
// // and expects the reversed number to be 0 as well.

// // To run these tests using Jest, you need to have Jest installed and configured 
// // in your project. Then you can execute the tests using the jest command in your 
// // terminal or by running your test script.




