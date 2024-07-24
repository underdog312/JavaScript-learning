const submit = document.querySelector(".submit-button");
const rightSide = document.querySelector(".right-side");
const title = document.getElementById("title");
const text = document.getElementById("text");

submit.addEventListener("click", function () {
  const messageTodo = document.createElement("div");
  messageTodo.innerHTML = `
  <h4 style='text-align: center'>${title.value}</h4>
  <p class='todo-paragraph'>${text.value}</p>
  <button id="deleteButton" class="delete-button" onclick="removeTodo(this)">delete</button>
        `;
  messageTodo.classList.add("todo-list");
  rightSide.append(messageTodo);
});

function removeTodo(button) {
  button.parentNode.remove();
}
