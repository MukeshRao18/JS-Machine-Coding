const input = document.getElementById('item');
const addButton = document.getElementById('button');
const todos = document.querySelector('.items');

addButton.addEventListener('click', () => {
    const inputData = input.value.trim();

    if (inputData !== '') {
        const division = document.createElement('div');
        division.className = 'todo-div';

        const newTodo = document.createElement('div');
        newTodo.className = 'todo-item';
        newTodo.textContent = inputData;

        const Button = document.createElement('button');
        Button.className = 'delete-btn';
        Button.textContent = 'Delete';

        Button.addEventListener('click', () => {
            todos.removeChild(division);
        });

        division.appendChild(newTodo);
        division.appendChild(Button);

        todos.appendChild(division);

        input.value = '';
    }
    else{
        alert('enter the input');
    }
});
