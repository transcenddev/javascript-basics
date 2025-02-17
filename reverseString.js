// reverse string
// reverses single and multiple word hello there -> ereht olleh
// works with numbers and punctuation
// works with blank strings


const reverseString = function(str) {
  // allowed handle empty text
  var newString = "";
  // reverse the string 
  
  // hello = 5 letters 
  // i = 5 - 1 ; i > 0; i--

  for (var i = str.length - 1; i >= 0; i--) { 
    newString += str[i]; // or newString = newString + str[i];
  }
  /* Here hello's length equals 5
      For each iteration: i = str.length - 1 and newString = newString + str[i]
      First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
      Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
      Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
      Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
      Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
  End of the FOR Loop*/

  // Step 3. Return the reversed string
  return newString; // "olleh"
};


// 
const reverseString = function(str) {
  // allowed empty string
  var newString = "";
  // go through the string 
  // example 'hello' the length of string is 5 - 1 is 4 it will start with end 'o'the string until it reaches 0 'h';
  for (i = str.length - 1; i < 0; i--) {
    // add each letter the newString
    newString = str[i];
  }
  // when done display newString
  return newString;

}

// we can reverse a function using a build in functions
const reverseString = function(str) {
  return str.split('').reverse().join('');
}