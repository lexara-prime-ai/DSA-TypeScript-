//Given an array and chunk size divide the array into many subarrays where each subarray  length is the chunk size.

//[(1,2,3,3,4,5,6,7],3)  ===[ [ 1, 2, 3 ], [ 3, 4, 5 ], [ 6, 7 ] ]

//([1,2,3,5,6,7],1) ===[ [ 1 ], [ 2 ], [ 3 ], [ 5 ], [ 6 ], [ 7 ] ]

// DEBUGGING | LOGGING
const debug = console.log;

class ArrayHandler {
    // METHOD TO DIVIDE ARRAY
    static divvyArray(arr: number[], CHUNK_SIZE: number) {
        for (let i = 0; i < arr.length; i++) {
            if (i == CHUNK_SIZE) {
                let temp:number[] = arr.splice(0, arr[CHUNK_SIZE]);
                return [temp, arr];
            }
        }
    }
}
debug(ArrayHandler.divvyArray([1, 2, 3, 4, 5, 6, 7, 8], 4));

////////////////////////////////
/////// FIRST ITERATION ///////     /*** REVISIT ***/
//////////////////////////////

// static divvyArray(arr: number[], CHUNK_SIZE: number) {
//     // DIVIDE ARRAY.LENGTH BY THE CHUNK_SIZE TO
//     // GET THE SPLIT_POINT & ROUND UP AND RETURN
//     // THE LOWER NUMBER GREATER THAN OR EQUAL TO
//     // THE CHUNK_SIZE USING Math.slice
//     let SPLIT_POINT = Math.ceil(arr.length / CHUNK_SIZE);
//     // GET THE INITIAL CHUNK OF THE ARRAY
//     let INITIAL_CHUNK = arr.splice(0, SPLIT_POINT);
//     // GET THE FINAL CHUNK OF THE ARRAY
//     // THE -SPLIT_POINT REFERS TO THE END
//     // OF THE ARRAY e.g array = [1, 2, 3]
//     // WE WILL ACCESS THE LAST INDEX LIKE SO
//     // array[-1]
//     let REST = arr.splice(-SPLIT_POINT);

//     return [INITIAL_CHUNK, REST];
// }