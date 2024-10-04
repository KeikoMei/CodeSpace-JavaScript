//Use script tag <script>[code]</script> to include javascript code in html file
//Use script tag <script src="path/to/file.js"></script> to include javascript code from external file
//

//How to display data (output):

//Console.log() - used to display data in console
console.log('message');

//innerHTML - used to display data in html
document.getElementById('id').innerHTML = 'data';

//alert() - used to display data in alert box
alert('data');


//How to get data (input):


//Window.prompt() -returns the data entered by the user

window.prompt();
prompt();
prompt(message);
prompt(message, defaultValue);

//Variables

var x; //old, function scoped, can be used before declaration, can be redeclared
let y; //new, block scoped, cannot be used before declaration, cannot be redeclared

// = to assign value

let x;
x = 5;

let x = 5;

//Constants - cannot change value, must be initialized

const x = 5;

//Data types
/*
Data Type	Description	                                Example

String      text -> can use "" or '' or ´´              'Hello', "Hello", `Hello` 
Number 	    an integer or a floating-point number 	    3, 3.234, 3e-2 etc.
BigInt 	    an integer with arbitrary precision 	    900719925124740999n , 1n etc. -> add n at the end
Boolean     true and false
undefined 	a data type whose variable is not initialized
null 	    null
Symbol 	    data type whose instances are unique and immutable
Object 	    key-value pairs of collection of data 	    let student = { }; (non primitive data type)

typeof operator - returns the data type of the variable -> typeof();
*/

//Conversion
/*
String() - converts to string
Number() - converts to number
Boolean() - converts to boolean
*/

//Operators

/*
Assignment Operators
-----------------------

Operator 	Name 	                Example
----------------------------------------------
= 	        Assignment operator 	a = 7; // 7
+= 	        Addition assignment 	a += 5; // a = a + 5
-= 	        Subtraction Assignment 	a -= 2; // a = a - 2
*= 	        Multiplication Assignment 	a *= 3; // a = a * 3
/= 	        Division Assignment 	a /= 2; // a = a / 2
%= 	        Remainder Assignment 	a %= 2; // a = a % 2
**= 	    Exponentiation Assignment 	a **= 2; // a = a**2


 Arithmetic Operators
-----------------------
+ 	Addition 	    x + y
- 	Subtraction 	x - y
* 	Multiplication 	x * y
/ 	Division 	    x / y
% 	Remainder 	    x % y
++ 	Increment (increments by 1) 	++x or x++
-- 	Decrement (decrements by 1) 	--x or x--
** 	Exponentiation (Power) 	        x ** y

Comparison Operators
-----------------------
== 	    Equal to: returns true if the operands are equal 	x == y
!= 	    Not equal to: returns true if the operands are not equal 	x != y
=== 	Strict equal to: true if the operands are equal and of the same type 	x === y
!== 	Strict not equal to: true if the operands are equal but of different type or not equal at all 	x !== y
> 	    Greater than: true if left operand is greater than the right operand 	x > y
>= 	    Greater than or equal to: true if left operand is greater than or equal to the right operand 	x >= y
< 	    Less than: true if the left operand is less than the right operand 	x < y
<= 	    Less than or equal to: true if the left operand is less than or equal to the right operand 	x <= y

Logical Operators
-----------------------
&& 	Logical AND: true if both the operands are true, else returns false 	x && y
|| 	Logical OR: true if either of the operands is true; returns false if both are false 	x || y
! 	Logical NOT: true if the operand is false and vice-versa. 	!x

String Operators
--------------------
+     Concatenation: adds two strings 	"Hello" + "World" // "HelloWorld"
+=    Concatenation assignment 	x += y // x = x + y

Other Operators
--------------------
,           evaluates multiple operands and returns the value of the last operand. 	let a = (1, 3 , 4); // 4
?:          returns value based on the condition 	(5 > 3) ? 'success' : 'error'; // "success"
delete      deletes an object's property, or an element of an array 	delete x
typeof      returns a string indicating the data type 	typeof 3; // "number"
void        discards the expression's return value 	void(x)
in          returns true if the specified property is in the object 	prop in object
instanceof 	returns true if the specified object is of of the specified object type 	object instanceof object_type


//Control statements

JavaScript Comparison Operators
== 	    Equal to: true if the operands are equal 	5==5; //true
!= 	    Not equal to: true if the operands are not equal 	5!=5; //false
=== 	Strict equal to: true if the operands are equal and of the same type 	5==='5'; //false
!== 	Strict not equal to: true if the operands are equal but of different type or not equal at all 	5!=='5'; //true
> 	    Greater than: true if the left operand is greater than the right operand 	3>2; //true
>= 	    Greater than or equal to: true if the left operand is greater than or equal to the right operand 	3>=3; //true
< 	    Less than: true if the left operand is less than the right operand 	3<2; //false
<= 	    Less than or equal to: true if the left operand is less than or equal to the right operand 	2<=2; //true

JavaScript Logical Operators

&& 	Logical AND: true if both the operands/boolean values are true, else evaluates to false 	true && false; // false
|| 	Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false 	true || false; // true
! 	Logical NOT: true if the operand is false and vice-versa. 	!true; // false

JavaScript Conditional Statements

If Statement

if (condition)
{
    // the body of if
}

If-Else Statement

if (condition) 
{
    // block of code if condition is true
} 

else 
{
   // block of code if condition is false
}

If-Else-If Statement

if (condition1) 
{
    // code block 1
}
else if (condition2)
{
    // code block 2
} 
else 
{
    // code block 3
}

Switch Statement

switch(variable/expression) 
{
    case value1:  
        // body of case 1
        break;

    case value2:  
        // body of case 2
        break;

    case valueN:
        // body of case N
        break;

    default:
        // body of default
}

Loops

For Loop
for (initialExpression; condition; updateExpression) 
{
    // for loop body
}

While Loop

while (condition)
{
    // while loop body
}

parseInt() - parses a string and returns an integer

parseInt(string, radix); //radix is optional and specifies the base of the number in the string (between 2 and 36) -> parseInt('10', 2) -> 2

Do-While Loop

do
{
    // do while loop body
} while (condition);


*/










