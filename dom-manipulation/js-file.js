// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

// Find the webpage's "container" box.
const container = document.querySelector("#container");

// create red paragraph
const p = document.createElement("p");
p.textContent = "Hey I’m red!";
p.style.color = "red";
container.appendChild(p);

// create blue h3
const h3 = document.createElement("h3");
h3.textContent = "Hey I’m blue!";
h3.style.color = "blue";
container.appendChild(h3);

// create div with border and background
const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

// create h1 inside div
const h1 = document.createElement('h1');
h1.textContent = "I’m in a div";
div.appendChild(h1);

// create p inside div
const p2 = document.createElement('p');
p2.textContent = "ME TOO!";
div.appendChild(p2);

// append div to the container.
container.appendChild(div);

// 
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");