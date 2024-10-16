//Declaration of the array and the sum and average variables
const numbers = [20, 30, 25, 35, -16, 60, -100];
let sum = 0;
let average = 0;

//We iterate through the array and add each element of the array to the sum variable, and calculate the average
for (let i = 0; i < numbers.length; i++)
{
    sum += numbers[i];
    average = sum / numbers.length;
}

//We print the average of the array numbers
//We use the toFixed() method to round the average to one decimal place.
document.write ("Average value of the array elements is: " + average.toFixed(1));