// let addToDoButton = document.getElementById("addToDo");
// let toDoContainer = document.getElementById("toDoContainer");
// let inputField = document.getElementById("inputField");

// addToDoButton.addEventListener("click", function () {
//   var paragraph = document.createElement("p");
//   //   paragraph.innerText = inputField.value;
//   toDoContainer.appendChild(paragraph);
// });
// const addButton = document.querySelector("#add-button");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let addButton = document.getElementById("addButton");

addButton.addEventListener("click", function (e) {
  let paragraph = document.createElement("p");
  paragraph.innerText = inputField.value;
  console.log(e);

  toDoContainer.appendChild(paragraph);

  let delButton = document.createElement("button");
  delButton.setAttribute("id", "delButton");
  delButton.textContent = "Delete"; // basically  <button id="delButton">Delete</button>

  toDoContainer.appendChild(delButton);
});
