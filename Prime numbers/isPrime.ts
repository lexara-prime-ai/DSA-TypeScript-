// let animal = {
//     name: "Animal",
//     eat() {
//       console.log(`${this.name} eats.`);
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal,
//     name: "Rabbit",
//     eat() {
//       // that's how super.eat() could presumably work
//       this.__proto__.eat.call(this); // (*)
//     }
//   };
  
//   rabbit.eat(); // Rabbit eats.

let NUMBER_OPERRATIONS = {
    // LOG TO CONSOLE
    logToConsole(...msg: any){
         console.log(msg);
        },

    //  CHECK IF NUMBER IS A PRIME NUMBER BY:
    
    //  iterating through all the numbers from 2 up to the square root of INPUT and checking if any of them divide INPUT evenly. If it finds a factor, it returns false, and if it completes the loop without finding any factors, it returns true, indicating that INPUT is a prime number.
    isPrimeNumber(INPUT: number) {
        // CHECK IS INPUT IS LESS THAN 2
        if (INPUT < 2) { 
            return false;
        }
       // Math.sqrt(INPUT): This calculates the square root of the value stored in the variable INPUT.

        // Math.ceil(): This function rounds up the result of Math.sqrt(INPUT) to the nearest integer greater than or equal to it.

        // let root = ...: This assigns the rounded-up square root value to the variable root.

        // The line calculates the square root of the INPUT value and then rounds it up to the nearest whole number, storing the result in the variable root.
        let root = Math.ceil(Math.sqrt(INPUT));

        for(let i = 2; i <= root; i++) {
            if (INPUT % i === 0) {
                return false;
            }
        }
        return true;
    }
}

NUMBER_OPERRATIONS.logToConsole(NUMBER_OPERRATIONS.isPrimeNumber(3));