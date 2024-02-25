/* A hero is on his way to the castle to complete his mission. 
* However, he's been told that the castle is surrounded with a couple of powerful dragons! 
* Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
* Assuming he's gonna grab a specific given number of bullets and move forward to fight another 
* specific given number of dragons, will he survive?

* Return true if yes, false otherwise :) */

// SOLUTION:

// This has been sitting in the 'unfinished' pile for a little while... 
// My original code included a variable within the function block that did the math for the 'number of bullets needed' 
// then passed it through the return with a if / else statement
// Not sure which is best practice, but this was the smallest line of code I could write - so alas practicing that here! 
// attempted a few times with the > < operators, and figured out that I needed it to be >= incase it was the exact number of dragons

function hero(bullets, dragons){
      return bullets >= dragons * 2 ? true : false;
};
