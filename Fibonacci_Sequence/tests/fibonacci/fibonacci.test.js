///////////////////
///// IMPORTS /////
///////////////////
const { GENERATE_FIBONACCI_SEQUENCE } = require('../../fibonacci');

describe('MATH_OPERATIONS', () => {
    describe('GENERATE_FIBONACCI_SEQUENCE', () => {
        it('should generate the correct fibonacci sequence', () => {
            const expectedOutput = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
            const actualOutput = GENERATE_FIBONACCI_SEQUENCE(9);
            expect(actualOutput).toEqual(expectedOutput);
        });
    });
});
