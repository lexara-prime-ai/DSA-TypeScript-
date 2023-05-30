// FORMULA : Fn = Fn-1 + Fn-2, where n > 1
let MATH_OPERATIONS = {
    logToConsole(msg: any) {
        console.log(msg);
    },

    SEQUENCE: function GENERATE_SEQUENCE(Fn: number) {
        // INITIALIZE ARRAY
        let NUMBERS: number[] = [];
        // SET THE CONTENTS OF THE ARRAY TO [0] IF Fn IS = 0  
        // ELSE SET THE CONTENTS OF THE ARRAY TO [0, 1] IF Fn IS = 1
        // ELSE SET THE CONTENTS OF THE ARRAY TO [0, 1]
        Fn === 0 ? NUMBERS = [0] : Fn === 1 ? NUMBERS = [0, 1] : NUMBERS = [0, 1];
        // LOOP IN ORDER TO GENERATE Fn NUMBERS
        for (let i = 2; i <= Fn; i++) {
            // APPLY THE FORMULA Fn = Fn-1 + Fn-2, where n > 1
            // IN ORDER TO GENERATE THE NUMBERS CORRECTLY
            NUMBERS.push(NUMBERS[i - 1] + NUMBERS[i - 2]);
        }
        this.logToConsole(NUMBERS);
    }
};

MATH_OPERATIONS.SEQUENCE(9);
