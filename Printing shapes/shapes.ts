// Write a function that accepts a positive Number

// The function should console log the steps shape
// with N levels using the # Character symbol 
// Make sure the steps has spaces on the right hand side

// steps(3)
//'#  ' HAS A # AND TWO SPACES
//'## ' HAS two # AND ONE SPACE
//'###' HAS three and no  SPACE

let DRAW = {
    logToConsole(DEFAULT: string, output: string, white_space: string) {
        console.log(output);
    },

    steps(INPUT: number) {
        let SYMBOL = "";
        let WHITE_SPACE = " ";
        if (INPUT < 0) {
            console.log("MESSAGE: ", "No negative values allowed!");
        }
        for (let i = 0; i < INPUT; i++) {
            this.logToConsole(SYMBOL, SYMBOL += '#', WHITE_SPACE);

        }

    }
}

DRAW.steps(3);



