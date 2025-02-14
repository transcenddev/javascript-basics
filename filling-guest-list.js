// Active learning: Filling in a guest list

// Problem - how to seperate string in the list?
// In this exercise, we want you to take a list of names stored in an array and put them into a guest list. But it's not quite that easy — we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.

// Make a list of people's names.
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// Find the spots on the webpage where we will show the groups.
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

// Start the lists with these words.
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// Look at each person's name one by one.
for (const person of people) {
  // If the person's name is Phil or Lola, they are NOT allowed in.
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    // Everyone else IS allowed in.
    admitted.textContent += `${person}, `;
  }
}

// Make the list look nice by adding a period at the end.
refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + '.';
