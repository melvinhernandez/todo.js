/** CODE FOR JS OBJECT TODO APP. **/

/* Empty list of Todos. */
var todos = [];
/* Counter to keep track of todos IDs. */
var todoCounter = 0;

/** Todo Object Constructor function. 
    Takes in a todo name and creates a new todo.
    Sets todo completed to false. **/
function Todo(name) {
  this.id = todoCounter;
  this.name = name;
  this.completed = false;
  todoCounter = todoCounter + 1;
}

/* Given a string name, creates and adds a new todo to todo list. 
   Returns the created todo. */
function addTodo(name) {
  /* Create a new todo with the given name. */
  var todo = new Todo(name);
  /* Add todo to our list of todos. */
  todos.push(todo);
  /* Returns the todo we just added to our list. */
  return todo;
}

/** CODE FOR DOM MANIPULATION. **/
/* Get text input element by ID. */
var inputBox = document.getElementById('todo-input');
/* Get 'addTodo' button element by ID. */
var addTodoButton = document.getElementById('add-todo-button');
/* Listening for button click. */
addTodoButton.addEventListener('click', handleButtonClick);

/* Get UL list element by ID. */
var todoList = document.getElementById('todo-list');

/* Function that handles 'Add ToDo' button click.
    - Gets value from text input.
    - Uses that value as the name for adding todo to todo list. 
    - Then creates an HTML element and appends it to DOM. 
    - Clears text input box. */
function handleButtonClick() {
  var name = inputBox.value;
  var createdTodo = addTodo(name);
  createTodoListItem(createdTodo);
  inputBox.value = null;
}

/* Helper function that will create an HTML li element.
   - Useful for appending that element to our todoList in DOM. */
function createTodoListItem(todo) {
  /* Create new list item and add class. */
  var listItem = document.createElement('li');
  listItem.classList.add('todo-item');
  listItem.id = 'todo-' + todo.id;
  /* Create checkmark. */
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = todo.id;
  checkbox.onclick = completeTodo;
  /* Add the checkmark to the list item. */
  listItem.appendChild(checkbox);
  /* Create the text node that will go in the list item. */
  var node = document.createTextNode(todo.name);
  /* Add the text to the list item. */
  listItem.appendChild(node);
  /* Add the list item to the rest of the todo list in the DOM. */
  todoList.appendChild(listItem);
}

/* Function handling clicking of checkbox. 
   - When checkbox clicked => toggle completed class on todo list item. */
function completeTodo(event) {
  var checkbox = event.target;
  var todo = todos[checkbox.id];
  todo.completed = !todo.completed;
  var todoElement = document.getElementById('todo-' + todo.id);
  todoElement.classList.toggle('completed');
}