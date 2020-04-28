import React, { useState } from 'react';
import { useInputChange } from '../customHooks/useInputChange';

const Modal = ({ action, todo, deleteTodo, editTodo, id }) => {
  const [input, handleInputChange] = useInputChange();
  const [description, setDescription] = useState('');

  {
    return action === 'delete' ? (
      <div
        className='modal fade'
        id={`confirmDeleteModal${id}`}
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header' style={{ alignItems: 'center' }}>
              <i
                className='fas fa-exclamation-circle fa-2x mr-2'
                style={{ color: '#ffc107' }}
              ></i>
              <h3 className='modal-title' id='exampleModalLabel'>
                Are you sure?
              </h3>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <p className='text-info' style={{ fontSize: '1.25rem' }}>
                If you delete this item you won't be able to get it back
              </p>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button
                type='submit'
                className='btn btn-danger'
                onClick={() => deleteTodo(id)}
                data-dismiss='modal'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div
        className='modal fade'
        id={`editModal${id}`}
        tabIndex='-1'
        role='dialog'
        aria-labelledby='editModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header' style={{ alignItems: 'center' }}>
              <h3 className='modal-title' id='editModalLabel'>
                Edit a todo
              </h3>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div class='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    name='description'
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    placeholder={todo.description}
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
              <button
                type='submit'
                className='btn btn-success'
                onClick={() => editTodo(input, id)}
                data-dismiss='modal'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
