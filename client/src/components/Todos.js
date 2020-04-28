import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const data = await (await fetch('http://localhost:5000/todos')).json();
      setTodos(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async id => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const editTodo = async (data, id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      getTodos();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className='px-5'>
      <table className='table mx-auto text-center'>
        <thead>
          <tr>
            <th>Description</th>
            <th></th>
            <th></th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className=''>
          {todos &&
            todos.map(todo => {
              return (
                <Todo
                  description={todo.description}
                  key={todo.todo_id}
                  id={todo.todo_id}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  todo={todo}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
