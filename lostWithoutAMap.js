// Given an array of integers, return a new array with each value doubled.
// For example:

// [1, 2, 3] --> [2, 4, 6]

// SOLUTION:

function maps(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
maps([1, 2, 3, 4]);
