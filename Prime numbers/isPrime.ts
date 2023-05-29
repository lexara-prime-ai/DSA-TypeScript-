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

    // CHECK IF NUMBER IS A PRIME NUMBER
    isPrimeNumber(INPUT: number) {
        // CHECK IS INPUT IS LESS THAN 2
        if (INPUT < 2) { 
            return false;
        }
       
        let root = Math.ceil(Math.sqrt(INPUT));

        for(let i = 2; i <= root; i++) {
            if (INPUT % i === 0) {
                return false;
            }
        }
        return true;
    }
}
