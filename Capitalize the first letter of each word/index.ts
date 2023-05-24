// Write a function that accepts a string, 
// and the function should capitalize the first letter 
// of each word in the string then return the results string.

// eg hello there -  Hello There

// hi - Hi
class APP {
    static TEXT_TRANSFORM(str: string) {
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
}

console.log(APP.TEXT_TRANSFORM("hello there"));
console.log(APP.TEXT_TRANSFORM("hi"));