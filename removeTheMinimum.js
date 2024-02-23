/* The museum of incredibly dull things wants to get rid of some exhibits. 
Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. 
She gives them a rating, and then removes the one with the lowest rating.
However, just as she finished rating all exhibits, she's off to an important fair, 
so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough. */

// THE TASK:
/* Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list. */
// Don't change the order of the elements that are left.

// THE SOLUTION:

function removeSmallest(numbers) {
 const newNums = numbers.slice(0);
 let smallestValue = numbers.indexOf(Math.min(...numbers));
 newNums.splice(smallestValue, 1);
 return newNums;
}
