//In this exercise, you will be working out of the file called troubleshooting.js.

// I get it, you're curious, 
// but it's OK if you don't understand what's going on in here, you'll learn it in time.

// const abTroubleshoot = require("./troubleshooting");

// const result = abTroubleshoot();

const a = 2;

const result = a;
if(result === 2) {
	console.log("Congrats! You got the correct answer");
} else if(typeof result === 'number') {
	console.log(`You returned the number ${result}, the result should be the number 2`);
} else {
	console.log(`You returned string "${result}", the result should be the number 2`);
}