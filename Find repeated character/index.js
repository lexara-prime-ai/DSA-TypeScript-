"use strict";
const debug = console.log;
class APP {
    static FIND_UNIQUE_CHAR(input) {
        input = input.toString();
        let VALUES = [];
        for (let char of input) {
            // RETURN THE FIRST CHARACTER THAT IS REPEATED
            if (VALUES.indexOf(char) !== -1) {
                return char;
            }
            VALUES.push(char);
        }
        return 'Nothing to return...';
    }

    static FIND_UNIQUE_CHAR_REG_EX(input) {
        const regex = /(.)\1+/g;
        const matches = input.match(regex);
        return matches;
    }
}

// USING REGULAR EXPRESSION
debug('The repeated character is :', APP.FIND_UNIQUE_CHAR_REG_EX("Helloo John"));


// debug('The repeated character is :', APP.FIND_UNIQUE_CHAR('Jonathan'));
// debug('The repeated character is :', APP.FIND_UNIQUE_CHAR(1134));



function findingrepeated(str) {
    const obj = {};
    str.toString().split('').forEach(char => obj[char] = obj[char] + 1 || 1);
    const maxCount = Math.max(...Object.values(obj));
    const mostFrequentChars = Object.keys(obj).filter(key => obj[key] === maxCount).join(',')
    return mostFrequentChars;
}


const inputString = 'jonathan';

const result = findingrepeated(inputString);
console.log(result);

//////////////////////////
// REGULAR EXPRESSIONS //
/////////////////////////
// const regex = /(.)\1+/g;
// const matches = input.match(regex);
// return matches;

// return /(.).*\1/.test(input); REG EX TO DETERMINE IF A CHARACTER HAS BEEN REPEATED IN A STRING