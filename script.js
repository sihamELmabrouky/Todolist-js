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
    chechButton.innerHTML = ` <span>check</span>`;
    chechButton.classList.add("todo-check");
    li.appendChild(chechButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = ` <span>delete</span>`;
    deleteButton.classList.add("todo-delete");
    li.appendChild(deleteButton);

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
        item.classList.toggle("completed");

    }


});