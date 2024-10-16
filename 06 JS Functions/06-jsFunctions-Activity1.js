//create a function that takes an array as a parameter and displays the content of the array
function showArray (array)
{
    //We print the content of the array
    document.write ("The content of the array is: ["); 

    for (let i = 0; i <= array.length - 1; i++)
    {
        if (i < array.length -1 )
        {
            document.write (array [i] + ", ");
        }
        else
        {
            document.write (array [i] + "]");
        }
    }

}

//create a function that takes an array as a parameter and displays the max value in the array
function findMaxValue (array)
{
    array.sort ((a, b) => a - b); //we use a comparison function to sort the array numerically instead of alphabetically
    document.write ("The max value in the array is: " + array [array.length - 1]); //we print the last element of the array
}

//Declaration of the array
const array = [10, 2, 3, 4, 7];

//We call the functions
showArray (array);
document.write ("<br><br>");
findMaxValue (array);


