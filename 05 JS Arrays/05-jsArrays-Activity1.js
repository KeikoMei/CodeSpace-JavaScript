//Declaration of the array and the sum variable
const numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

//We iterate through the array and add each element of the array to the sum variable
for (let i = 0; i < numbers.length; i++)
{
    sum += numbers[i];
}

//We print the sum of the array numbers
document.write ("The sum is " + sum);