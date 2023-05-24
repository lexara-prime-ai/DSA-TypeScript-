const log = console.log;

let text = 'cola';
let arr = text.split('');
let reversedArray:string[] =  [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
}

let reversedText = reversedArray.join('');
log(reversedText);

/****************************************/

const reverseString = (str: string): string => {
    debugger;
    return str === '' ? '' : reverseString(str.slice(1)) + str[0];
}

log(reverseString(text));


