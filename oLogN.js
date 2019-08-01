/* 
 *  O(log N):  Logarithmic time
 *  An algorithm is said to run in logarithmic time if its time execution is proportional to the logarithm of the input size.
 */

/* #90 
 * Given a sorted array, and a target, return the index of the target if it exists within the array.
 * If the target does not exist within the array, then return -1. 
 *
 * CONSTRAINTS: You must solve this in O(Log(n)) time, which means you cannot scan all the elements in the array to find the target. 
 *
 * Ex1: 
 * Input: [2, 3, 6, 9, 10, 15], -8 
 * Output: -1 
 * Ex 2: 
 * Input: [1, 4, 18, 19, 20], 20
 * Output: 4 
 *
 *  The math --
 *    N    binary search
 *  ---------------------
 *    2    1
 *    4    2
 *    8    3
 *   10    4  (worst case)
 *   16    4
 *   32    5
 *   ...  ...
 *    n    log n (base 2)
 */

function find_target_index( int_array, target ) {
  let counter = 0;  // count how many times int_array is accessed

  // use binary search
  let targetIndex = -1;
  let startIndex = 0;
  let endIndex = int_array.length;
  while ( endIndex > startIndex ) {
    let half = Math.floor((endIndex + startIndex) / 2);
    counter++;  // next line of code will access int_array
    if ( int_array[half] === target ) {
      targetIndex = half;
      break;
    } else if ( int_array[half] > target ) {
      endIndex = half;
    } else {
      startIndex = half + 1;
    }
  }  // end of while loop

  console.log("Looked at array:", counter, "times");
  return targetIndex;
}  // end of integer find_target_index( sorted array of integers, integer )

// Test
// console.log( find_target_index([2, 3, 6, 9, 10, 15], -8) );
// console.log( find_target_index([1, 4, 18, 19, 20], 20) );
console.log( find_target_index([1,2,3,4,5,6,7,8,9,10], 0) );
//console.log( find_target_index([1,2,3,4,5,6,7,8,9,10], 4) );
//console.log( find_target_index([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 8) );
