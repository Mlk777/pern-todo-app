const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); //Get access to req.body

//ROUTES//

//create a todo
app.post('/todos', async (req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1) RETURNING *',
      [description]
    );

    res.json(newTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query('SELECT * FROM todo');
    res.json(todos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id= $1', [id]);

    res.json(todo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE todo_id = $2',
      [description, id]
    );
    res.json('Todo updated!');
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [
      id,
    ]);

    res.json('Todo deleted!');
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log(`Server has started on port ${PORT}`);
});
