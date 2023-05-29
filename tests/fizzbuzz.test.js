/////////////////////////////
///////// IMPORTS //////////
///////////////////////////
const FizzBuzz = require('./FizzBuzz');

describe('FizzBuzz', () => {
  describe('generate()', () => {
    it('should generate the correct FizzBuzz sequence', () => {
      const expectedOutput = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"];
      const actualOutput = FizzBuzz.generate(10);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });

  describe('getReplacement()', () => {
    it('should return "Fizz" for multiples of 3', () => {
      expect(FizzBuzz.getReplacement(3)).toBe("Fizz");
      expect(FizzBuzz.getReplacement(6)).toBe("Fizz");
      expect(FizzBuzz.getReplacement(9)).toBe("Fizz");
    });

    it('should return "Buzz" for multiples of 5', () => {
      expect(FizzBuzz.getReplacement(5)).toBe("Buzz");
      expect(FizzBuzz.getReplacement(10)).toBe("Buzz");
      expect(FizzBuzz.getReplacement(20)).toBe("Buzz");
    });

    it('should return "FizzBuzz" for multiples of both 3 and 5', () => {
      expect(FizzBuzz.getReplacement(15)).toBe("FizzBuzz");
      expect(FizzBuzz.getReplacement(30)).toBe("FizzBuzz");
      expect(FizzBuzz.getReplacement(45)).toBe("FizzBuzz");
    });

    it('should return the number itself for non-multiples of 3 or 5', () => {
      expect(FizzBuzz.getReplacement(1)).toBe(1);
      expect(FizzBuzz.getReplacement(7)).toBe(7);
      expect(FizzBuzz.getReplacement(13)).toBe(13);
    });
  });
});
