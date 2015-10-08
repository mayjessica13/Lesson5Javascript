//Variables
//Variables are any container for a value i.e.
var myName = “Jessica”


//Debugging (alerts, comments, the console) is searching for errors in the programming code by using console.log() or alert() 
//You can also add comments into the Javascript with the line beginning with // of groups of lines surrounded by /*like in CSS*/.


//Data Types
// String -“Something contained within quotation marks”
// Numbers
// Boolean –true or false
// Undefined –has no value


//Arrays
// Arrays are contained in [ ] and hold data in a variety of forms
// [3, 6, 9, 11] or [3, “martian”, 19, “pansy”]
// Arrays can also contain other arrays, such as the class example:
var toyotas = [“Camry”, “Prius”];
var porsches = [“Camero”, “Boxer”];
var cars = [toyotas, porsches];
var cars = [ [“Porsche”, “Camero”], [“Camry”, “Prius”] ];
console.log(cars[0][0]);
//(console will return) “Porsche”
console.log(cars[1][0]);
//(console will return) “Camry”

//Testing
// A test returns a Boolean true or false i.e. “books” === “camera”; (console returns) false
// *Comparison operators to use with testing:*
// !== Not equal
// !== Not equal value or not equal type
// < Less than
// > Greater than
// <= Less than or equal to
// >= Greater than or equal to
// == Equal to
// === Equal value and equal type

//If and Else statements:
if(5 > 10){
	console.log(“You’ll never see this because it’s false”);
} else{
	console.log(“You will see this”);
}


//Logic
// Logic controls the flow of your program.
// Logical operators are used to determine the logic between variables or values, such as:
// &&  (and)	ex. (x < 10 && y > 1) is true	(&& returns true if both expressions are true, otherwise it returns false)
// || (or)		ex. (x == 5 || y == 5) is false	(|| returns true if one or both expressions are true, otherwise it returns false)
// ! (not)		ex. !(x == y) is true	(! Returns true for false statement, and false for true statements)


//Functions
// Functions are a way to encapsulate code for later use; it can take arguments, which are used as variables inside a function; 
// It usually returns a value (which can be used later or displayed immediately)
// Class example:
function someName(numberOne, otherNumber){
	return numberOne + 10 + otherNumber;
}
console.log(someName(4, 14));
(console returns) 28

function alertName(somePersonsName){
	return alert(somePersonsName);
}
alertName(“Jessica”)

// Identifying Data Types
// You can ask the variable for its datatype using the typeof() function
var yourName = “This is my name.”;
typeof(yourName);
//(returns) string


//Loops
// Is a block of code that gets repeated for a defined amount of iterations (for loop) or until a certain condition is met (while loop)
// Typically one variable or condition in the loop changes each time it is run

// Loops – for
for(var i = 0; i<10; i++){
	console.log(i)
}
// (returns)
// 0
// 1
// 2
// 3
// …
// 9

//Loops – for
beer = [“Lagunitas”, “Peak”]
for(var = i = 0; i<beers.length; i++){
	console.log(beers[i])
}
// (returns) “Lagunitas”
// “Peak”

//Loops-while
x = 6
while(x < 10){
	console.log(“On number “ + x)
	x++;
}
// (returns)
// 6
// 7
// 8
// 9

//EXAMPLES OF SIMPLE FUNCTIONS
function cheeseNumber (numOne, numTwo) {
	return numOne + 5 + 34 + numTwo;
}
console.log(cheeseNumber(8, 27));


var greeting = function (name) {
	console.log("It's so nice to meet you," + " " + name);
}
greeting("Jessica");






