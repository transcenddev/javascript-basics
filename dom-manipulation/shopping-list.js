
//  Shopping list 
//  dynamically add items to the list using a form input and button. 
//  When you add an item to the input and press the button:

// The item should appear in the list.
// Each item should be given a button that can be pressed to delete that item off the list.
// The input should be emptied and focused ready for you to enter another item.


// SELECT and REFERENCE the element
const list = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("button")

// When the addButton is CLICKED => Add the item to list
addButton.addEventListener("click", () => {
  alert("Item Added!");

  // STORE the input into myItem
  const myItem = input.value;
  input.value = '';

  // CREATE an element for list
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const deleteButton = document.createElement("button");

  // APPEND the list item to the list
  listItem.appendChild(listText);
  listText.textContent = myItem ;
  listItem.appendChild(deleteButton);
  deleteButton.textContent = 'Delete';
  list.appendChild(listItem);

  // DELETE the list item
  deleteButton.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});