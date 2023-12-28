const Dark = document.getElementById("darkLight");
const body = document.querySelector("body");

Dark.addEventListener("click", function (e) {
  body.style.backgroundColor = "#000000";
});

let inputField = document.getElementById("inputBox");
let addBtn = document.getElementById("addBtn");
let listFields = document.getElementById("listFields");

addBtn.addEventListener("click", function (e) {
  if (inputField.value == "") {
    alert("Please Enter Tast!!!");
  }
  else {
    let newElement = document.createElement("ul");
    newElement.innerHTML = `${inputField.value} <i class="fa-solid fa-trash-can"></i>`;
    listFields.appendChild(newElement);
    inputField.value = "";

    newElement.querySelector("i").addEventListener("click", remove);
    function remove() {
      newElement.remove();
    }
  }
});
