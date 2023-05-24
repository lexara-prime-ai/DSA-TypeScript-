const log = console.log;
// Given an integer , return an integer that is reverse ordering the numbers

// INITIALIZE REVERSED NUMBER AND SET IT TO 0
let reversedNumber: number = 0;
let INIT: number = 1;
let BASE: number = 10;
// FUNCTION TO REVERSE NUMBER
const reverseInput = (INPUT: number): number => {
    // IF INPUT IS < 0
    if (INPUT > 0) {
        // CALL reverseInput 
        reverseInput(Math.floor(INPUT / BASE)); // ROUND OFF THE RESULT TO THE NEAREST NUMBER
        reversedNumber += (INPUT % BASE) * INIT;
        INIT *= BASE;
    }
    // RETURN THE REVERSED INPUT
    return reversedNumber;
}

log(reverseInput(500));













/////////////////////////////////////////////
/////////////////  TESTING /////////////////
///////////////////////////////////////////





