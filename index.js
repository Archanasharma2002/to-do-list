
const inputBox = document.getElementById('inputBox');
const addbtn = document.getElementById('addbtn');
const todoList = document.getElementById('todoList');

const addToDo = () => {
   const inputText = inputBox.value.trim();
   
   if (inputText.length <= 0) {
       alert("You must write something in your todo");
       return; // prevent further execution if input is empty
   }

   // Create a new list item and its content
   const li = document.createElement("li");
   const p = document.createElement("p");
   p.innerHTML = inputText;
   li.appendChild(p);

   // Create and append Remove button
   const deleteBtn = document.createElement("button");
   deleteBtn.innerText = "Remove";
   deleteBtn.className = 'delete-btn'
   deleteBtn.addEventListener('click', () => {
       todoList.removeChild(li); // Remove the current list item when clicked
   });
   li.appendChild(deleteBtn);

   // Create and append Edit button
   const editBtn = document.createElement("button");
   editBtn.innerText = "Edit";
   editBtn.className = 'edit-button';
   editBtn.addEventListener('click', () => {
       const newText = prompt("Edit your todo:", p.innerHTML);
       if (newText !== null && newText.trim() !== "") {
           p.innerHTML = newText.trim(); // Update the paragraph with new text
       }
   });
   li.appendChild(editBtn);

   // Append the list item to the todoList
   todoList.appendChild(li);

   // Clear the input box after adding the item
   inputBox.value = "";
}

addbtn.addEventListener('click', addToDo);
