// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

//THE SOLUTION:

// I wasn't sure at first if the challenge wanted us to do an actual 'input' option with a document.querySelector & using the value...
// After I thought about it for awhile, I figured theres no way to really do that with no html given
// I assumed that it wanted what it WOULD look like if you had an input, therfore I used a template literal like below:


function greet(name){
  return (`Hello, ${name} how are you doing today?`)
}
