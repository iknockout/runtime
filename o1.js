/*
 *  Asymptotic notation:  Indicates how fast a function grows with the input size.
 *  big-Omega  (best case runtime; at least)
 *  big-Theta  (runtime of the program is the same in every case)
 *  big-O / big-Oh  (worst case runtime)
 */

/*  O(1):  Constant time
 *  An algorithm is said to run in constant time if it requires the same amount of time regardless of the input size.
 */

function getLastArrayElement( arr ) {
  let lastIndex = arr.length - 1;
  return arr[lastIndex]; 
}

// Test
console.log( getLastArrayElement([1]) );
console.log( getLastArrayElement([1,2,3,4,5,6,7,8,9,10]) );
