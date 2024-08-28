let addToDoButton = document.getElementById('addtodo');
let addToDoContainer = document.getElementById('todo-container');
let inputField = document.getElementById('inputfield');

addToDoButton.addEventListener("click", function () {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value ;
    addToDoContainer.appendChild(paragraph);
    inputField.value=( "");
    paragraph.addEventListener("click" , function (){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener("dblclick" , function (){
        addToDoContainer.removeChild(paragraph);
    })
})