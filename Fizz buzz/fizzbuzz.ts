class FizzBuzz {
    static generate(number: number) {
        let output: string[] = [];
        for (let i = 1; i <= number; i++) {
            output.push(this.getReplacement(i));
        }
        return output;
    }

    static getReplacement(number: number): any {
        if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
        if (number % 3) return "Fizz";
        if (number % 5) return "Buzz";
        else return number;
    }
}

console.log(FizzBuzz.generate(10).join(", "));