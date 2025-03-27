
//  Shopping list 
//  dynamically add items to the list using a form input and button. 
//  When you add an item to the input and press the button:

// The item should appear in the list.
// Each item should be given a button that can be pressed to delete that item off the list.
// The input should be emptied and focused ready for you to enter another item.


// SELECT and REFERENCE the element
const myList = document.querySelector('ul');
const input = document.querySelector('input');
const addButton = document.querySelector('#btn');

// CREATE a function when the addButton is clicked the input will be add in the list
addButton.addEventListener('click', () => {
  alert('Add Item!');

  // STORE the input 
  const myItem = input.value;
  input.value = '';

  // CREATE a list of items
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const deleteButton = document.createElement('button')

  // APPEND the input to the list items
  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(deleteButton);
  deleteButton.textContent = 'Delete';

  // APPEND the list items in the parent list node
  myList.appendChild(listItem);

  // CREATE a delete function button
  deleteButton.addEventListener('click', () => {
    myList.removeChild(listItem);
  });
  
  // FOCUS on the element when entring the next shopping list tiem
  input.focus();
});