

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// CREATE paragraph red
const p1 = document.createElement('p');
p1.textContent = "Hey I'm red!";
p1.style.color = 'red';

container.appendChild(p1);

// CREATE h3 blue
const h3 = document.createElement('h3');
h3.textContent = "Hey I'm blue!";
h3.style.color = 'blue';

container.appendChild(h3);

// CREATE div with black border and pink background 
const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';  

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(div);