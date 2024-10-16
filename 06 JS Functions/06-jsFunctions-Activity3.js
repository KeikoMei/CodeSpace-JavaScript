function isItPrime (number)
{
    if (number <= 1) //Check for negative numbers, 0 or 1, because they are not prime
    { 
        return false; 
    }

    if (number == 2) // Check if its 2, because 2 is prime
    {
        return true;
    }

    if (number % 2 == 0)  //Check if its an even number, because even numbers are not prime
    {
        return false;
    }

    for (let i = 3; i*i <= number; i += 2)  //Check if the number is divisible by any number from 3 to the square root of the number. Dont check for even numbers, because they are not prime.
    { 
        if (number % i == 0) //If the number is divisible by i, then it is not prime.
        {    
            return false;
        }
    }

    return true; //If the number is not divisible by any number, then it is prime.
}

function solvePrime ()
{
    let number = window.prompt ("Enter a number"); //Prompt the user to enter a number.

    if (isItPrime (number) == true) //Check if the number is prime or not using the isItPrime function.
    { 
        document.write ("The number " + number + " is prime"); //If the number is prime, print that it is prime.
    } 
    else 
    {
        document.write ("The number " + number + " is not prime"); //If the number is not prime, print that it is not prime.
    }
}

solvePrime (); //Call the solvePrime function to check if the number is prime or not.

