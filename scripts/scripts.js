// Variables
// ---DOMelements
const newTaskForm = document.getElementById('newTaskForm');
const todoTableElement = document.getElementById('todoTable');

// ---LOCALelements
const todos = [
  {
    id: Math.random(),
    title: 'Title',
    description: 'description',
    deadline: 'deadline',
  },
  {
    id: Math.random(),
    title: 'Title',
    description: 'description',
    deadline: 'deadline',
  },
];

// Functions
const renderTodos = () => {
  let output = `<tr>
  <th>Title</th>
  <th>Description</th>
  <th>Deadline</th>
  <th>Update</th>
  <th>Delete</th>
</tr>`;

  todos.forEach((item) => {
    output += `
      <tr>
      <td>${item.title}</td>
      <td>${item.description}</td>
      <td>${item.deadline}</td>
      <td><button class='completedBtn' data-id="${item.id}">COMPLETED</button></td>
      <td><button class='deleteBtn' data-id="${item.id}">DELETE</button></td>
    </tr>
      `;
  });
  todoTableElement.innerHTML = output;

  const deleteBtn = document.querySelectorAll('.deleteBtn');
  const completedBtn = document.querySelectorAll('.completedBtn');

  deleteBtn.forEach((btn) => btn.addEventListener('click', deleteTodo));
  completedBtn.forEach((btn) => btn.addEventListener('click', completeTodo));
};

const handleNewTodo = (e) => {
  e.preventDefault();

  const event = {
    id: Math.random(),
    title: e.target.taskTitle.value,
    description: e.target.taskDescription.value,
    deadline: e.target.taskDate.value,
  };

  todos.push(event);
  renderTodos();
};

const deleteTodo = (e) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === +e.target.dataset.id) {
      todos.splice(i, 1);
    }
  }
  renderTodos();
};

const completeTodo = (e) => {
  if (e.target.innerText === 'COMPLETED') {
    e.target.innerText = 'INCOMPLETE';
  } else if (e.target.innerText === 'INCOMPLETE') {
    e.target.innerText = 'COMPLETED';
  }
};

// Events
document.addEventListener('DOMContentLoaded', renderTodos);
newTaskForm.addEventListener('submit', handleNewTodo);
