// make a simple shopping list
// allows to add items to the list using form input and button 
// when you add an item to the input and press the button
  // The item should appear in the list.
  // Each item should be given a button that can be pressed to delete that item off the list.
  // The input should be emptied and focused ready for you to enter another item.


// CREATE reference
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// when the button is clicked add the input

btn.addEventListener("click", () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');
  
  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();

});

// store the current value input
// empty string 


