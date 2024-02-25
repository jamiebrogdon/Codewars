/* Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
* Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
* If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
* If he doesn't get 10 hoops, return the string "Keep at it until you get it". */

// SOLUTION:

// I wanted to practice the ? : as opposed to more lines of code with if / else statements
// this code passes all the tests, but when trying to submit on codewars it isn't letting me... 
// so I will write out an if /else to see if that helps!

function hoopCount (n) {
   return n > 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
};

// IF / ELSE STATEMENT:
// Again, this works as the 'test' however, when I go to submit it is saying failed test...

function hoopCount (n) {
if (n > 10){
  return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
};


