// SELECT and reference the element
const link = document.querySelector("a");

// Change the text content of the element
link.textContent = "Mozilla Developer Network";

// Change the href attribute of the element 
link.href = "https://developer.mozilla.org";


// ----------------------------------------------


// Creating and placing new nodes

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);

const text = document.createTextNode(
  " — the premier source for web development knowledge.",
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);
sect.removeChild(linkPara);


// linkPara.parentNode.removeChild(linkPara);

para.setAttribute("class", "highlight");