// Active learning: Launch countdown

// print out a simple launch countdown to the output box, from 10 down to Blastoff. Specifically, we want you to:

const output = document.querySelector('.output');
output.textContent = "";

let i = 10;
// loop from 10 to 0
while (i >= 0) {
  // each loop will create a new paragraph
  const para = document.createElement('p');
  
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if ( i === 0) {
    para.textContent = `Blast off!`;
  } else {  
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}