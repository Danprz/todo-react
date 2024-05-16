import './App.css';
import { TodoCounter } from './TodoCoutner';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList'; 
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
{text: 'Verificar la MAJ de la base de datos', completed: false},
{text: 'Observar los rendimientos de la semana pasada', completed: false},
{text: 'Optimizar los archivos excel', completed: false},
{text: 'Escribir codigo para crear paginas web', completed: false},
{text: 'Terminar el curso de React', completed: false}
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text = {todo.text}
            completed = {todo.completed} />
        ))}
        
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
