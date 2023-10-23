addButton = document.getElementById("add-button");
todoContainer = document.getElementById("todo-container");
todoInput = document.getElementById("todo-input");


addButton.addEventListener("click", (e) => {

    let todo = document.createElement("div");
    todo.classList.add("todo");
    let li = document.createElement("li");
    li.innerHTML = ` ${todoInput.value}`;
    todo.appendChild(li);

    let chechButton = document.createElement("button");
    chechButton.innerHTML = ` <i class="fa-solid fa-check"></i>`;
    chechButton.classList.add("todo-check");
    todo.appendChild(chechButton);
    // li(todo)
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = ` <i class="fa-solid fa-circle-minus"></i>`;
    deleteButton.classList.add("todo-delete");
    todo.appendChild(deleteButton);
    // li(todo)

    if (todoInput.value === "") {
        alert("please Enter some text");

    }
    else {

        todoContainer.appendChild(todo);
    }
    todoInput.value = "";

});
todoContainer.addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("todo-delete")) {
        let item = target.parentElement;
        item.remove();

    }
    if (target.classList.contains("todo-check")) {
        let item = target.parentElement;
        item.classList.toggle("toggle");

    }


});