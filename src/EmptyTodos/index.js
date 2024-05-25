import React from 'react';
import './EmptyTodos.css';
import { TodoContext } from '../TodoContext';

function EmptyTodos() {
  const {
    totalTodos
  } = React.useContext(TodoContext)

  return (
    totalTodos === 0 ? (
      <p className='text-pop-up-top'>
        Add a task
      </p>) : (
      <p className='text-flicker-out-glow'>
        No matches
      </p>)
    );
  }

  export { EmptyTodos };