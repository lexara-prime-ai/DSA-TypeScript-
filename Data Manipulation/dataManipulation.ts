// DEBUGGING | LOGGING
const logger = console.log;
/////////////////////////////////////////////
//  The class : DATA_OPERATIONS            //
//  contains methods that carry            //
//  out various operations based on        //
//  the input that has been provided       //
/////////////////////////////////////////////
class DATA_OPERATIONS {
    ///////////////////////////////////////////////
    // METHOD TO FIND THE LONGEST WORD IN A STRING
    //////////////////////////////////////////////
    static FIND_LONGEST_WORD(str: string): string {
        // CONVERT THE STRING INTO AN ARRAY
        let WORD_ARRAY: string[] = str.split(' ');
        // DECLARE VARIABLE LONGEST_WORD AND INITIALIZE IT TO 0
        let LONGEST_WORD: string = '';
        // LOOP THROUGH THE WORD_ARRAY 
        for (let word of WORD_ARRAY) {
            // CHECK IF THE CURRENT word LENGTH IS LONGER
            // THAN THE CURRENT VALUE STORED IN THE
            // LONGEST_WORD
            if (word.length > LONGEST_WORD.length) {
                // OVERWRITE THE VALUE STORED IN THE VARIABLE
                // LONGEST_WORD 
                LONGEST_WORD = word;
            }
        }
        // RETURN THE LONGEST WORD
        return LONGEST_WORD;
    }

    ////////////////////////////////////////////
    // METHOD TO CHECK IF AN ARRAY OF NUMBERS //
    // CONTAINS A PATTERN                     //
    ////////////////////////////////////////////
    static IS_SEQUENTIAL_ARRAY(arr: number[]) {
        // SETS WILL HOLD UNIQUE VALUES ONLY,
        // MEANING new Set(2, 2) IS INVALID
        let isARITHMETIC_SET = new Set();
        let isGEOMETRIC_SET = new Set();

        // LOOP THROUGH THE ARRAY
        for (let i = 1; i < arr.length; i++) {
            // PERFORM MATHEMATICAL OPERATION(Subtraction)
            // TO DETERMINE IF THE OUTPUT VALUE IS CONSISTENT
            // THROUGHOUT THE ARRAY
            let ARITHMETIC_DIFF = arr[i] - arr[i - 1];
            isARITHMETIC_SET.add(ARITHMETIC_DIFF);
            // PERFORM MATHEMATICAL OPERATION(Division)
            // TO DETERMINE IF THE OUTPUT VALUE IS CONSISTENT
            // THROUGHOUT THE ARRAY
            let GEOMETRIC_DIFF = arr[i] / arr[i - 1];
            isGEOMETRIC_SET.add(GEOMETRIC_DIFF);
        }
        // CHECK IF THE isARITHMETIC_SET CONTAINS A SINGLE 
        // VALUE, MEANING THAT THE DIFFERENCE BETWEEN VALUES
        //  PRODUCES THE SAME OUTPUT
        if (isARITHMETIC_SET.size === 1) {
            return `
                The input provided is sequential
                    PATTERN : Arithmetic
            `;
        }
        // CHECK IF THE isARITHMETIC_SET CONTAINS A SINGLE 
        // VALUE, MEANING THAT DIVIDING THE index VALUE
        // WITH THE PREVIOUS VALUE PRODUCES THE SAME OUTPUT
        // THROUGHOUT THE ARRAY
        if (isGEOMETRIC_SET.size === 1) {
            return `
                The input provided is sequential
                    PATTERN : Geometric
            `;
        }
        // RETURN -1 IF THE ARRAY IS NOT SEQUENTIAL
        return  `THE INPUT PROVIDED IS NOT GEOMETRIC..`;
    }

    ////////////////////////////////////////////
    // METHOD THAT CAPITALIZES THE FIRST      //
    // LETTER OF A STRING                     //
    ////////////////////////////////////////////
    static TEXT_TRANSFORM(str: string) {
        // CONVERT THE INPUT STRING TO AN ARRAY
        // ADN MAP THROUGH IT 
        let WORD_ARRAY = str.split(" ").map(WORD => {
            // GET THE FIRST LETTER USING THE
            // STRING METHOD, .slice 
            let FIRST_LETTER = WORD.slice(0, 1);
            // GET THE REST OF THE LETTERS USING THE
            // STRING METHOD, .slice(1)
            let REST = WORD.slice(1);
            FIRST_LETTER = FIRST_LETTER.toUpperCase();
            // JOIN THE FIRST LETTER AND THE REST OF
            // THE LETTERS
            return `${FIRST_LETTER}${REST}`;
        })
        return WORD_ARRAY.join(" ");
    }

    // TEXT TRANSFORM ALTERNATIVE
    static TEXT_TRANSFORM_ALT(str: string) {
        // CONVERT STRING TO AN ARRAY AND MAP THROUGH IT
        let WORD_ARRAY = str.split(" ").map(WORD => {
            // SELECT CHARACTER AT THE SPECIFIED INDEX AND
            // CONVERT IT TO UPPERCASE AND APPEND IT TO
            // THE REST OF THE WORD
            return WORD.charAt(0).toUpperCase() + WORD.slice(1);
        })
        // CONCATENATE ARRAY CONTENTS
        return WORD_ARRAY.join(" ");
    }

    //////////////////////////////////////////
    //// METHOD TO LOOK FOR UNIQUE VALUES ////
    //////////////////////////////////////////
    static FIND_UNIQUE_CHAR(str: string) {
         let VALUES:string[] = [];
        for (let letter of str) {
            if (VALUES.indexOf(letter) !== -1) {
                return letter;
            }
            VALUES.push(letter);
        }
        return 'Nothing to return';
    }
}

logger(DATA_OPERATIONS.FIND_UNIQUE_CHAR('Jonathan'));
