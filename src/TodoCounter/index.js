import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';


function TodoCounter() {

  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext)

  return (
    completedTodos === totalTodos ? (
      <h1 className='TodoCounter'>
        You have 0/0 tasks to do !
      </h1>) : (
      <h1 className='TodoCounter'>
        You have <span>{totalTodos-completedTodos}</span>/<span>{totalTodos}</span> tasks to do !
      </h1>)
  );
}

export { TodoCounter };

