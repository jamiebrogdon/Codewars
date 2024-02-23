// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.

// SOLUTION: 

// A switch otta' do the trick to switch these lights! (pun intended)
// creating a switch that takes in the parameter / argument of the function 'updateLight'
// if input is green, then it will read yellow! So on, and so fourth
// attempted a few times, seeing that some of my syntax wasn't correct (placing ; on the returns)

function updateLight(current) {
  switch (current){
      case "green":
        return "yellow"
      case "yellow":
        return "red"
      case "red":
        return "green"
  }
};
