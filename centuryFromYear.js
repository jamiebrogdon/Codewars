// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in:

// SOLUTION:

//created an if / else statement. If the year is divisible by 100, return the year divided by 100 to get the century.
// Thanks to MDN, I found the math method for rounding! 
// The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.

function century(year) {
   if (year % 100 === 0) {
        return year / 100;
  } else {
      return Math.ceil(year / 100);
    }
}
