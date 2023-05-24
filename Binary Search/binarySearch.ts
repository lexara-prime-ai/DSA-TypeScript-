// DEBUGGING
const log = console.log;
// MAIN FUNCTION 
const Search = (arr:number[], target:number) => {
    // INITIALIZE START TO ONE
    let start:number = 1;
    let end:number = arr.length - 1;

    while(start <= end) {
        debugger;
        let mid:number = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = end - 1;
        }   
    }
    return false; // RETURN false IF VALUE IS NOT PRESENT WITHIN THE ARRAY
}

log(Search([5, 67, 43, 24, 12], 67));