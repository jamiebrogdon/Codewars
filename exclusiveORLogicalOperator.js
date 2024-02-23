// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). 
// The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. 

// For example:

/* false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true. */

// "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

/* Since we cannot define keywords in Javascript (well, at least I don't know how to do it), 
your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. 
Your xor function should have the behaviour described above, 
returning true if exactly one of the two expressions evaluate to true, false otherwise. */

//SOLUTION: 

// Knowing that in order for this to be correct, only ONE must be "true", while if both are the equivilent it will be incorrect..
// My first attempt I wrote out a detailed if & else if statements comparing all 4...
// ... then I tried a swtich statement, which wasn't working and was much longer and seemed uncessary. 
// I know it would have 'technically' gotten it done but didn't seem like best practice here.
// refactored my if / else statement with a simplified version.
// using the ! (not operator) knowing that a and b shouldn't be the same value & cut out the rest of the code.


function xor(a, b) {
  if (a !== b) {
    return true;
  } else {
    return false;
  }
};
