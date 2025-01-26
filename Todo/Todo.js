const input = document.getElementById('item');
const addButton = document.getElementById('button');
const todos = document.querySelector('.items');

addButton.addEventListener('click', () => {
    const inputData = input.value.trim();

    if (inputData !== '') {
        // Create a container for the todo item and delete button
        const division = document.createElement('div');
        division.className = 'todo-div';

        // Create the todo item
        const newTodo = document.createElement('div');
        newTodo.className = 'todo-item';
        newTodo.textContent = inputData;

        // Create the delete button
        const Button = document.createElement('button');
        Button.className = 'delete-btn';
        Button.textContent = 'Delete';

        // Add event listener to delete the entire division (todo item and button)
        Button.addEventListener('click', () => {
            todos.removeChild(division);
        });

        // Append the todo item and delete button to the container
        division.appendChild(newTodo);
        division.appendChild(Button);

        // Append the container to the todos list
        todos.appendChild(division);

        // Clear the input field
        input.value = '';
    }
    else{
        alert('enter the input');
    }
});
