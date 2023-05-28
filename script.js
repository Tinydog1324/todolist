const formElement = document.querySelector('form');
  const inputElement = document.querySelector('#new-task-input');
  const todoListElement = document.querySelector('.todo-list');

  formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTaskText = inputElement.value.trim();
    if (!newTaskText) {
      return;
    }

    const newLiElement = document.createElement('li');
    const newCheckboxElement = document.createElement('input');
    newCheckboxElement.type = 'checkbox';
    newCheckboxElement.id = `task${todoListElement.children.length + 1}`;
    newCheckboxElement.name = `task${todoListElement.children.length + 1}`;

    const newLabelElement = document.createElement('label');
    newLabelElement.htmlFor = `task${todoListElement.children.length + 1}`;
    newLabelElement.textContent = newTaskText;

    const newDeleteButtonElement = document.createElement('button');
    newDeleteButtonElement.classList.add('delete-button');
    newDeleteButtonElement.textContent = 'Delete';

    newLiElement.appendChild(newCheckboxElement);
    newLiElement.appendChild(newLabelElement);
    newLiElement.appendChild(newDeleteButtonElement);

    todoListElement.appendChild(newLiElement);

    inputElement.value = '';
  });

todoListElement.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('delete-button')) {
    const liElement = event.target.closest('li');
    const checkboxElement = liElement.querySelector('input[type="checkbox"]');

    if (checkboxElement.checked) {
      liElement.remove();
    }
  }
});




