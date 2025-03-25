

// Select 
document.querySelector('div');
document.querySelectorAll('div');

// Create Element
const div = document.createElement('div');

// place the element in the DOM
document.body.appendChild(div);

// remove elements
document.body.removeChild(div);

// adding inline styles
div.style.color = "blue";

style.cssText = "color: blue;";

div.setAttribute('style', 'color: blue;', 'background-color: red');