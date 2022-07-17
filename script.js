var button = document.getElementById("btn");
var input = document.getElementById("text");
// var ol = document.querySelector("ol");
var list = document.querySelector(".list");

var action = document.querySelector(".action");
function inputLength() {
  return input.value.length;
}

function createListElement() {
  let listItem = document.createElement("div");
  listItem.classList = "list-item";
  var p = document.createElement("p");
  p.appendChild(document.createTextNode(input.value));
  listItem.appendChild(p);
  input.value = "";
  let action = document.createElement("div");
  action.classList = "action";
  var edit = document.createElement("button");
  action.appendChild(edit);
  // action.value = "";
  edit.innerText = "Edit";
  edit.classList = "edit";
  var remove = document.createElement("button");

  action.appendChild(remove);
  remove.innerText = "Delete";
  remove.classList = "remove";
  listItem.appendChild(action);
  list.appendChild(listItem);
  
  remove.addEventListener("click", function () {
    action = this.parentNode;
    listItem = action.parentNode;
    list = listItem.parentNode;
    list.removeChild(listItem);
  });
  edit.addEventListener("click", function () {
    action = this.parentNode;
    let nodeText = action.previousSibling;
    console.log(nodeText);
    input.value = nodeText.innerText;
    // list.removeChild(nodeText.parentNode);
    p.style.textDecoration = "line-through";
  });
}
button.addEventListener("click", function () {
  if (inputLength() > 0) {
    createListElement();
  }
});
input.addEventListener("keypress", function (event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
});
