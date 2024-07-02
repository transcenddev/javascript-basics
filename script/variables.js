let message; // declares a variable with the name “message”:

message = 'Hello World'; // store the string 'Hello' in the variable named message

alert(message); // shows the variable content



// we can combine the variable declaration and assignment into a single line:

let message = 'Hello World!';

alert(message); // Hello World!


// we can declare mutiple variables in one line:
let user = 'John', age = 25, message = 'Hello';


// multiline variant is longer but easier to read
let user =  'John';
let age = 25;
let message = 'Hello';


let user = 'John'
  , age = 25,
  , message = 'Hello';


//In older scriptsm, var is almost the same let:
var message = 'Hello World!';

// variable is like a box and the message is the label behind the box


// Constant - unchanging value

const myBirthday = '18.04.1982'; 
myBirthday = '01.01.2001'; // error, can't reassign the constant!


// Summary
// We can store data by using the let, var and const.
// let is the modern variable declaration.
// var is the old-school variable declaration.
// const is like let but cannot be changed.


