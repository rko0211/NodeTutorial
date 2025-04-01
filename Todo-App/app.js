const express = require('express');
const app = express();
const path = require('path');

// Serve the HTML UI
app.use(express.static(path.join(__dirname, 'public')));
// Middleware to parse the json data

app.use(express.json);
let todos = [];

// Create new todo(POST)
app.post('/todos', (req, res) => {
  const { task } = req.body;
  const newtodo = { id: todos.length + 1, task, completed: false };
  todos.push(newtodo);
  res.status(201).json(newtodo);

});
// Read all to-dos (GET)
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Update a to-do (PUT)
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  const todo = todos.find(todo => todo.id == id);

  if (todo) {
    if (task) todo.task = task;
    if (typeof completed === 'boolean') todo.completed = completed;
    res.json(todo);
  } else {
    res.status(404).json({ error: 'To-do not found' });
  }
});

// Delete a to-do (DELETE)
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(todo => todo.id == id);

  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ error: 'To-do not found' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}....`);
})