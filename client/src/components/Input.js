import React, { useState } from 'react';
import { useInputChange } from '../customHooks/useInputChange';

const Input = () => {
  const [input, handleInputChange] = useInputChange();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h1 className='font-weight-bold text-center mt-5'>Pern Todo List</h1>
      <form className='d-flex p-5' onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            type='text'
            name='description'
            className='form-control shadow-none'
            onChange={handleInputChange}
          />
          <div className='input-group-append'>
            <button type='submit' className='btn btn-success text-nowrap'>
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Input;
