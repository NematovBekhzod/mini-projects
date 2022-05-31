const input = document.getElementById("input");
const add = document.getElementById("add");
const container = document.querySelector(".todo-container");

add.addEventListener("click", todo);

function todo(e) {
  if (input.value.length > 0) {
    e.preventDefault();

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h4");
    todoTitle.innerText = input.value;

    const btnRemove = document.createElement("button");
    const btnComplate = document.createElement("button");

    btnComplate.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    btnRemove.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`;

    const btns = document.createElement("div");
    btns.classList.add("btns");

    btns.append(btnComplate);
    btns.append(btnRemove);

    todo.append(todoTitle);
    todo.append(btns);

    container.append(todo);

    input.value = "";

    btnComplate.addEventListener("click", () => {
      const btnComplateParents = btnComplate.parentElement.parentElement;
      if (btnComplateParents.classList.contains("complate")) {
        btnComplateParents.classList.remove("complate");
      } else {
        btnComplateParents.classList.add("complate");
      }
    });

    btnRemove.addEventListener("click", () => {
      const btnRemoveParents = btnRemove.parentElement.parentElement;
      btnRemoveParents.classList.add("remove");
      setTimeout(() => {
        btnRemoveParents.remove();
      }, 1000);
    });
  } else {
    alert("to'ldirilmagan todo");
  }
}
