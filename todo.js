var addItemInput = document.querySelector("input.addItemInput");
var addItemButton = document.querySelector("button.addItemButton");
var listDiv = document.querySelector(".list");
var listUl = listDiv.querySelector('ul');
var ul = document.getElementsByTagName("ul")[0];

addItemButton.addEventListener('click', () => {
  var ul = document.getElementsByTagName("ul")[0];
  var list = document.createElement("li");
  list.textContent = addItemInput.value;
  ul.appendChild(list);
  var button = document.createElement("button");
 list.appendChild(button);
  button.textContent = "remove";
  addItemInput.value = '';
})

ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
})

