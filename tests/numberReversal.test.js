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