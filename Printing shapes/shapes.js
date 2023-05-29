"use strict";
// Write a function that accepts a positive Number
// The function should console log the steps shape
// with N levels using the # Character symbol 
// Make sure the steps has spaces on the right hand side
// steps(3)
//'#  ' HAS A # AND TWO SPACES
//'## ' HAS two # AND ONE SPACE
//'###' HAS three and no  SPACE
// let DRAW = {
//     logToConsole(DEFAULT, output, white_space) {
//         console.log(output);
//     },
//     steps(INPUT) {
//         let SYMBOL = "";
//         let WHITE_SPACE = " ";
//         if (INPUT < 0) {
//             console.log("MESSAGE: ", "No negative values allowed!");
//         }
//         for (let i = 0; i < INPUT; i++) {
//             this.logToConsole(SYMBOL, SYMBOL += '#', WHITE_SPACE);
//         } 
//     }
// };
// DRAW.steps(3);

// function stepshape(num) {
//     if (num > 0) {
//         for (let i = 0; i < num; i++) {
//             let hash = '';

//             for (let j = 0; j < num; j++) {
//                 if (j <= i) {
//                     hash += '#';
//                 } else {
//                     hash += ' ';
//                 }
//             }
//             console.log(hash);
//         }
//     }
//     else {
//         console.log('number must be positive');
//     }
// }
// stepshape(3)





// function pattern(num) {
//     // CONVERTS -VE VALUES TO +VE
//     let n = Math.abs(num)
//     for (let i = 0; i < n; i++) {
//         let stair = '';
//         for (let j = 0; j < n; j++) {
//             if (j <= i) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//        console.log(stair);
//     }
// }

// pattern(-9)



// function triangle(number) {
//     if (number <= 0) {
//         console.error('not valid');
//     }
//     for (let i = 0; i <= number; i++) {
//         let char = ''
//         for (let j = 1; j <= i; j++) {
//             char += '#'
//         }
//         console.log(char);
//     }
// }

// triangle(-3);


// const steps = (n) => {
//     if (typeof n !== 'number') {
//         console.log('provide a number')
//         return
//     }
//     if (Math.sign(n) == -1) {
//         console.log('provide a positive number');
//         return
//     }
//     for (let i = 0; i < n; i++) {
//         let step = '';
//         for (let j = 0; j < n; j++) {
//             if (j <= i) {
//                 step += '#';
//             }
//             else {
//                 step += ' ';
//             }
//         }
//         console.log(step);
//     }
// };

// steps(-6);

// function steps(no) {
//     if (no < 0) {
//         console.log("invalid");
//     }
//     let hash = "#"
//     let space = " "
//     for (let index = 1; index <= no; index++) {
//         console.log(hash.repeat(index) + space.repeat(no - index));
//     }
// }

// steps(-3)

// function positiveValues(digit) {

//     if (digit <= 0) {
//         console.log("A positive number is required");
//     }
//     for (let level = 1; level <= digit; level++) {

//         let step = "";

//         for (let gap = 1; gap <= digit - level; gap++) {
//             gap += "";
//         }
//         for (let star = 1; star <= level; star++) {

//             step += "#"
//         }
//         console.log(step);
//     }
// }


// positiveValues(-7)

// module.exports=positiveValues



// function steps(n) {
//     if (n > 0) {
//         for (let i = 0; i < n; i++) {

//             let z = ' ';

//             for (let j = 0; j < n; j++) {
//                 if (j <= i) {
//                     z += '#'
//                 } else {
//                     z += ' ';
//                 }
//             }
//             console.log(z)
//         }
//         console.log(positive);
//     } else {
//         console.log('number shouldnt be negative')
//     }

// }

// steps(-3)
// const x = -10

// function numberSteps(value) {
//     let steps_shape = []
//     let step = ''

//     if (typeof (value) == 'number') {
//         if (Math.sign(value) == 1) {
//             if (value == 1) {
//                 steps_shape.push('#')
//             }
//             else {
//                 for (let i = 1; i <= value; i++) {
//                     // add # and space if required

//                     step = '#'.repeat(i) + ' '.repeat(value - i)

//                     steps_shape.push(step)
//                 }
//             }
//             return steps_shape
//         }
//         else if (Math.sign(value) == -1) {
//             console.log(value + " not a positive number")
//         }
//     }
//     else {
//         console.log(value + " is not a number",)
//     }
// }
// console.log(numberSteps(3));


function stepWise(num) {
    if (num > 0) {
        for (let i = 0; i <= num; i++) {
            let hash = '';
            while (i <= num) {
                hash += "# "
                console.log(hash)
                i++
            }
        }
    }
}

stepWise(3)

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return
    }
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1)
    }
    stair.length <= row ? stair += '#' : stair += ' '
    steps(n, row, stair)
}