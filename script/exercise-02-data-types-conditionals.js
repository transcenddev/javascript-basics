// /**
//  * The code below tells the browser to ask you for a number
//  * then if that number is `6`, it returns `true` otherwise it returns `false`
//  * 
//  * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
//  */

// number = Number(prompt("enter a number"));

// function numberChecker() {
// 	if(number === 6) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }


number = Number(prompt("enter a number"));

function numberChecker() {
	if(number >= 10) {
		return true;
	} else {
		return false;
	}
}
