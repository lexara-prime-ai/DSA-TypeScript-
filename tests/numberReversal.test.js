/////////////////////////////
///////// IMPORTS //////////
///////////////////////////
import { expect } from 'chai';
import { reverseInput } from './reverseInput'; 

describe('reverseInput', () => {
    it('should reverse a positive number', () => {
        expect(reverseInput(12345)).to.equal(54321);
    });

    it('should reverse a negative number', () => {
        expect(reverseInput(-9876)).to.equal(-6789);
    });

    it('should reverse zero', () => {
        expect(reverseInput(0)).to.equal(0);
    });
});