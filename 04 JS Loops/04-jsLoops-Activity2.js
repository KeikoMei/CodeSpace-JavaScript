let i = 0; //We initialize the variable i to 0.
let number = window.prompt("Enter a number"); //We prompt the user to enter a number.

while (i <= 10) //We create a while loop that will run as long as i is less than or equal to 10.
{
    document.write (number + " x " + i + " = " + number*i + "<br>");    //We print the multiplication table of the number entered by the user.
    i++;   //We increment the value of i by 1.
}