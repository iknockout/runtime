/*
 *  O(N log N):  An example is Merge Sort.
 */

/*  mergeSort() is called recursively to break down an input array (list) to smaller, more manageable pieces.
 *  merge() is a helper function built to help combine those broken-down pieces into ordered combination arrays (lists).
 *
 *  mergeSort() continues to break down an input array (list) until it only has one element and then it joins that
 *  with other single element arrays (lists) to create sorted 2-element arrays (lists). Then it combines 2-element
 *  sorted arrays (lists) into 4-element sorted arrays (lists).
 *  It continues that way until all the items of the lists are sorted!
 *
 *  The math --
 *  The input array is broken down into pieces...half each time until there's only 1 element in each array...we saw
 *  the math of cutting a list in half (binary search) -- that is log N runtime.
 *  Then the algorithm merges the arrays and there are N arrays to merge (since we broke it down to 1 element in
 *  each array).  Hence we have N * log N.
 *
 *  Reference:  https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort
 */

const merge = (left, right) => {
  let result = [];  
  
  while ( (left.length > 0) && (right.length > 0) ) {
    counter++; 
    if ( left[0] < right[0]) {
      result.push( left[0] );
      left.shift();
    } else {
      result.push( right[0] );
      right.shift();
    }
  }  // end of while loop
 
  if ( left.length > 0 ) {
    result = result.concat( left );
  }
  if ( right.length > 0 ) {
    result = result.concat( right );
  }
  return result;
};  // end of Array merge(Array, Array)

function mergeSort( arr ) {
  // base case
  if ( arr.length <= 1 ) {
    return arr;
  }
  
  counter++;

  // recursive step
  let middleIndex = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, middleIndex);
  let rightArray = arr.slice(middleIndex);

  let leftSorted = mergeSort( leftArray );
  let rightSorted = mergeSort( rightArray );

  return merge( leftSorted, rightSorted );
}  // end of mergeSort(Array)


// Test
let counter = 0;
console.log( mergeSort([5,10,4,9,3,8,2,7,1,6]) );
console.log("Array was accessed", counter, "times");
