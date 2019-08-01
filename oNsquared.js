/*
 *  O(N^2):  Quadratic time
 *  An algorithm whose performance is directly proportional to the square of the size of the input data set.
 *  This is common with algorithms that involve nested iterations over the data set. 
 */

/*  Bubble sort is an algorithm to sort a list through repeated swaps of adjacent elements. It has a runtime of O(n^2).
 *  Example with [5, 4, 3, 2, 1]
 *  Consider the first pass -- the first array element is compared n-1 times:
 *  5 > 4
 *  resulting in [4, 5, 3, 2, 1]
 *  5 > 3
 *  resulting in [4, 3, 5, 2, 1]
 *  5 > 2
 *  resulting in [4, 3, 2, 5, 1]
 *  5 > 1
 *  resulting in [4, 3, 2, 1, 5]
 *  four comparisons total in the first pass, i.e. n-1 times.
 *  second pass --
 *  4 > 3
 *  resulting in [3, 4, 2, 1, 5]
 *  4 > 2
 *  resulting in [3, 2, 4, 1, 5]
 *  4 > 1
 *  resulting in [3, 2, 1, 4, 5]
 *  3 comparisons total in the second pass, i.e. n-2 times
 *  ...
 *  As we correctly place more values, fewer elements need to be compared. 
 *  The math --
 *  1st iteration results in n-1 comparisons
 *  2nd iteration results in n-2 comparisons
 *  3rd iteration results in n-3 comparisons
 *  .....
 *  n-2th iteration results in 2 comparisons
 *  n-1th iteration results in 1 comparsion  (note: n - i, where i=n-1 ==> n - (n - 1) = n - n + 1 = 1)
 *  nth iteration results in 0 comparison  (note: n - i, where i=n ==> n - n = 0)
 *  solve for the sum of n - i, where i=1 to n-1
 *  (n-1) + (n-2) + (n-3) + ... + (n-(n-3)) + (n-(n-2)) + (n-(n-1))
 *  = (n-1) + (n-2) + (n-3) + ... + 3 + 2 + 1
 *  = (n-1) + 1 + (n-2) + 2 + (n-3) + 3 + ... + (n-j) + j
 *  = n + n + n + ... + n ==> there are (n-1)/2 pairs of (n-j)+j ==> there are (n-1)/2 of n
 *  = n (n-1)/2
 *  = (n^2 - n) / 2
 *  = O(n^2)
 */

// helper function
const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

function bubbleSort( arr ) {
  let counter = 0;  // count how many times arr is accessed

  arr.forEach( function(element) {  // element isn't used
    counter++;
    for ( let index = 0;  index < arr.length-1;  index++ ) {
      counter++;
      if ( arr[index] > arr[index+1] ) {
        swap( arr, index, index+1 );
      }
    }  // end of for loop
  } );  // end of .forEach
  
  console.log("After sort:", arr);
  console.log("Array was accessed", counter, "times");
}  // end of bubbleSort(array)

// Test
bubbleSort([5,4,3,2,1]);
bubbleSort([5,10,4,9,3,8,2,7,1,6]);
