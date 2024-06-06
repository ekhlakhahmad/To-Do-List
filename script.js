let darkBg = document.querySelector(".darkBg");
let blueBg = document.querySelector(".blueBg");
let greenBg = document.querySelector(".greenBg");
let pinkBg = document.querySelector(".pinkBg");
let lightBg = document.querySelector(".lightBg");
let yellowBg = document.querySelector(".yellowBg");

let body = document.querySelector(".bodyBg");

let inputField = document.getElementById("inputBox");
let addBtn = document.getElementById("addBtn");
let listFields = document.getElementById("listFields");

darkBg.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  listFields.style.color = "black";
})
blueBg.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
  body.style.color = "white";
  listFields.style.color = "black";
})
greenBg.addEventListener("click", () => {
  body.style.backgroundColor = "green";
  body.style.color = "white";
  listFields.style.color = "black";
})
pinkBg.addEventListener("click", () => {
  body.style.backgroundColor = "pink";
  body.style.color = "black";
})
yellowBg.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
  body.style.color = "black";
})
lightBg.addEventListener("click", () => {
  body.style.backgroundColor = "white";
  body.style.color = "black";
})

const AddTask = () => {
  if (inputField.value == "") {
    alert("Please Enter Tast!!!");
  } else {
    let newElement = document.createElement("ul");
    newElement.innerHTML = `${inputField.value} <i class="fa-solid fa-trash-can"></i>`;
    listFields.appendChild(newElement);
    inputField.value = "";

    newElement.querySelector("i").addEventListener("click", remove);
    function remove() {
      newElement.remove();
    }
  }
};

inputField.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    addBtn.click();
  }
});
