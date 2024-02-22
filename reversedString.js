// Complete the solution so that it reverses the string passed into it.

// Looked up on the mdn how to reverse a string, and there were several suggestions, this one looked to be the most straight forward.
// using a split, reverse, and join method within the function to reverse the string

function solution(str){
    return str.split('').reverse().join('');
}
