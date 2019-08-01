/*
 *  O(N):  Linear time
 *  An algorithm is said to run in linear time if its time execution is directly proportional to the input size,
 *  i.e. time grows linearly as input size increases.
 */

// helper function
const printCounter = count => {
  console.log("Array was accessed:", count, "times");
};

function linearSearch( arr, target ) {
  let counter = 0;  // count how many times arr is accessed

  for ( let index = 0;  index < arr.length;  index++ ) {
    counter++;  // next line of code will access arr
    if ( arr[index] === target ) {
      printCounter(counter); 
      return true;
    } 
  }  // end of for loop

  printCounter(counter); 
  return false;
}  // end of boolean linearSearch( arg1, arg2 )

// Test
console.log("Array includes 0:", linearSearch([1,2,3,4,5,6,7,8,9,10], 0) );
