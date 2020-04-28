import React, { useState } from 'react';
import Modal from './Modal';

const Todo = ({ todo, deleteTodo, editTodo, description, id }) => {
  const [action, setAction] = useState(null);
  return (
    <>
      <tr className=''>
        <td>{description}</td>
        <td></td>
        <td></td>
        <td>
          <button
            type='submit'
            className='btn btn-info'
            data-toggle='modal'
            data-target={`#editModal${id}`}
            onClick={() => setAction('edit')}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            type='submit'
            className='btn btn-danger'
            data-toggle='modal'
            data-target={`#confirmDeleteModal${id}`}
            onClick={() => setAction('delete')}
            //You need a unique ID for each modal call !
          >
            Delete
          </button>
        </td>
      </tr>
      <Modal
        id={id}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        action={action}
        todo={todo}
      />
    </>
  );
};

export default Todo;
