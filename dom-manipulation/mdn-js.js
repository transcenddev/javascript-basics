// 01 - CHANGE link

// SELECT the reference
const link = document.querySelector("a");

// CHANGE the link 
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

// 02 - COMBINE TEXT

// SELECT reference
const sect = document.querySelector("section");
// CREATE a paragraph
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride."
sect.appendChild(para);

// COMBINE the text to the paragraph above
const text = document.createTextNode(
  " - the premier source for web development knowledge.",
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// REMOVE the node
// sect.removeChild(linkPara);
// linkPara.remove();

// this support the older versions browsers
linkPara.parentNode.removeChild(linkPara);

// 03 - manipulate CSS

// CHANGE the appearance of the paragraph
// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";

// another way to manipulate CSS
para.setAttribute("class", "highlight");