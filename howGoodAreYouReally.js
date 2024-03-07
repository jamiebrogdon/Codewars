/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

//SOLUTION:

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((acc, c) => acc + c, 0) / classPoints.length; 
}

//using the reduce method, we create a arrow function that takes in two parameters, calling these accumulation and current for the numbers (acc, c)
//which will be divided by the total number of students in the class to get the average (classPoints)
//since we do not know the classPoints from the above information and knowing they could change we use a .length method to grab that information from whatever array will be used
//and if the total sum of classPoints average is less than yourPoints, it will return
