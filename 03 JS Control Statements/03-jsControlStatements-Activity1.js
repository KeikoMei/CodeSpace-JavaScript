//Creation of variables
let a;
let b;
let c;

//We prompt the user to enter the values of the variables a, b, and c.
a = window.prompt("Enter first number");
b = window.prompt("Enter second number");
c = window.prompt("Enter third number");

//We inform the user wether the variables are equal or different.
if (a == b && b == c) 
{
    document.write("All numbers are equal");
}
else if (a != b && b != c && a != c)
{
    document.write("All numbers are different");
}
else
{
    document.write("Neither all are equal or different");
}




