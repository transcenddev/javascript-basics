
// simple launch countdown to the output box, from 10 down to Blastoff.




const output = document.querySelector('.output');
output.textContent = "";



let i = 10;
// Loop from 10 down to 
while (i<=10)
{   
  const para = document.createElement('p');
  para.textContent = i;
  output.appendChild(para);
  i--;
}



// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
