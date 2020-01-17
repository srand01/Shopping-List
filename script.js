var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var addDone = document.getElementById("liDone");
var btnRemove = document.getElementsByClassName("removeLi");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var btn = document.createElement("button");
  btn.innerHTML = "X";
  btn.setAttribute("class", "removeLi");

  li.appendChild(document.createTextNode(input.value));
  li.appendChild(btn);

  ul.appendChild(li);
  input.value = "";

  deleteBtn();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

//removes li btns
function deleteBtn() {
  for (var i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener("click", function(e) {
      e.currentTarget.parentNode.remove();
    });
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//toggle done class for #liDone li
addDone.addEventListener("click", function(e) {
  if (e.target && e.target.matches("li")) {
    e.target.classList.toggle("done");
  }
});
//to delte the buttns
deleteBtn();
