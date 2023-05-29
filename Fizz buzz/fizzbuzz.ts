class FizzBuzz {
    generate(number: number) {
        let output: string[];
        for (let i = 1; i <= n; i++) {
            output.push(this.getReplacement(i));
        }
        return output;
    }

    getReplacement(number: number): string {
        if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
        if (number % 3) return "Fizz";
        if (number % 5) return "Buzz";
        else return n;
    }
}

const fizzBuzz = new FizzBuzz();
const result = fizzBuzz.generate(100);
console.log(result.join(", "));