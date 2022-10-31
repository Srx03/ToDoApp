window.addEventListener('load', () => {
    const form = document.querySelector("#new-todo-form");
    const input = document.querySelector("#new-todo-input");
    const listElement = document.querySelector("#todos");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const todo = input.value;

        if(!todo){
            alert("Please add your todo");
            return;
        }

        const todoElement = document.createElement("div");
        todoElement.classList.add("todo");

        const todoContentElement = document.createElement("div");
        todoContentElement.classList.add("content");

       todoElement.appendChild(todoContentElement);

        const todoInputElement = document.createElement("input");

        todoInputElement.classList.add("text");
        todoInputElement.type = "text";
        todoInputElement.value = todo;
        todoInputElement.setAttribute("readonly", "readonly");
        
        todoContentElement.appendChild(todoInputElement);

        const todoActionsElement = document.createElement("div");
        todoActionsElement.classList.add("actions");

        const todoEditElement = document.createElement("button");
        todoEditElement.classList.add("edit");
        todoEditElement.innerHTML = "Edit";

        const todoDeleteElement = document.createElement("button");
        todoDeleteElement.classList.add("delete");
        todoDeleteElement.innerHTML = "Delete";

        todoActionsElement.appendChild(todoEditElement);
        todoActionsElement.appendChild(todoDeleteElement);

        todoElement.appendChild(todoActionsElement);

        input.value = "";


        listElement.appendChild(todoElement);


    })

} )