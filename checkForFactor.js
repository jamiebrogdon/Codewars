// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.

// SOLUTION:

// created an if / else statement to determine if it was either a factor of the base or not (divisible by it)
// most straight forward solution I know of is using the mod operator
// took a few tries, because I had the factor listed first and not the base, which changed up the equation


function checkForFactor (base, factor) {
    if (base % factor === 0) {
         return true;
      } else {
          return false;
      }
  };
