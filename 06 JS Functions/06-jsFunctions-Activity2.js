function factorial (number)
{
    let result = 1;

    for (let i = 1; i <= number; i++)
    {
        result = result * i;
     
    }
    return result;
}

function solveFactorial ()
{
    let number = prompt("Enter a positive number");

    if (number < 0)
    {
        document.write ("The number entered is negative. Please enter a positive number");
    }
    else 
    {
        document.write ("The factorial of " + number + " is: " + factorial (number));
    } 
}

solveFactorial ();
