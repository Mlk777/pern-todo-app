import React from 'react';
import './assets/css/App.css';
import Input from './components/Input';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <div className='container'>
        <Input />
        <Todos />
      </div>
    </>
  );
}

export default App;
