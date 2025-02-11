//loops are usefulto do all the same thing over and over again

// display 5 hello world messages
for (let i = 0; i < 5; i++) {
  console.log('Hello, World!');
}

// display odd numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) console.log(i);
}

// display odd numbers from 1 to 5 in the reverse order
for (let i = 1; i <= 5; i--) {
  if (i % 2 === 0) console.log(i);
}

------------------------------------------------------------

// to loop through an array, you can use the for...of loop

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

// to manipulate an item in array and creates a new colelction, you can use the map method

// converts a string into uppercase
function toUpperCase(string) {
  return string.toUpperCase();
}

// create a collections of cats
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// create a new collection of cats in UpperCase
const upperCaseCats = cats.map(toUpperCase);

// display the new collection of cats i UpperCase
console.log(upperCaseCats);


// to filter an array, you can use the filter method

// filter cats that starts with the letter "L"
function LCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(LCat);

console.log(filtered);


// standard loop

// for (initialExpression; condition; incrementExpression) {'



------------------------------------------------------------

// while and do... while loops

// initialize expression
// while (condition {
//   Increment expression
// })



// create a collections of cats
const cats = ["Pete", "Biggles", "Jasmine"];

// create a string to store the cats
let myFavoriteCats = "My cats are called ";

let i = 0;
 
// loop through the cats array
while (i < cats.length) {
  // check if the last item in the array
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    // othewrwise, add a comma with cat's name
    myFavoriteCats += `${cats[i]}, `;
  }

  // increment initial expression to move to the next cat
  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

// do... while lopp
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

// what's the difference between while and do... while loops?
// while loop checks the condition first before executing the code block
// do... while loop executes the code block first before checking the condition