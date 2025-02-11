
// arrays - store collections of data in a single variable

const a = ["A", "B", "C"];
console.log(a); // ["A", "B", "C"]

// you can access array by referencing the number of index
console.log(a[0]) // A

// you can also change the value of an array by referencing the index
a[0] = "Z";

// you can also add new items to the array
a.push["D", "E"];

// you can also remove items from the array
a.pop();

// you can also add an array to another array
const b = ["F", "G"];

// array have methods that you can use to manipulate the data
a.length; // 5