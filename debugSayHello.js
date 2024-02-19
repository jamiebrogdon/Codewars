/* Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. 
It is your job to fix the code and get the program working again!Example output:

Hello, Mr. Spock */

// Original code:

function sayHello(name) {
  return `Hello'
}

// The correction:

function sayHello(name) {
  return `Hello, ${name}`;
}
sayHello("Mr. Spock")

// thankfully, I could tell pretty quick that the parameter had not been called or given the argument & I started there
// Added the string literal with the parameter to be included in the returned string
// Then, when the function is called, inserting the name, "Mr. Spock" into the proper parameter to read out... 

// "Hello, Mr. Spock"

// Ta Da!

