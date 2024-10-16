//Declaration of the array and the sum variable
const numbers = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];

//We sort the array
numbers.sort();
//We get the index of the maximum number in the array
let maxNumberIndex = numbers.length - 1;

//We print the maximum and minimum values of the array
document.write ("Maximum value for the above array = " + numbers [maxNumberIndex] + "<br>");
document.write ("Minimum value for the above array = " + numbers [0] + "<br>");