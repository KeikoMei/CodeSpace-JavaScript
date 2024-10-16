//Creation of variables for the second activity
let d;
let e;
let f;

//We prompt the user to enter the values of the variables d, e, and f.

d = window.prompt("Enter first number");
e = window.prompt("Enter second number");
f = window.prompt("Enter third number");

//We inform the user wether the variables are in increasing order or not.

if (d < e && e < f)
{
    document.write("Increasing order");
}
else if (d > e && e > f)
{
    document.write("Decreasing order");
}
else
{
    document.write("Neither increasing or decreasing order");
}




